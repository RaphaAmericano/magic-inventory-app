const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerPlugin = require("fork-ts-checker-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const resolveApp = relativePath => path.resolve(process.cwd(), relativePath);
const isEnvProduction = process.env.NODE_ENV === "production";
const isEnvDevelopment = process.env.NODE_ENV !== "production";

const svgoConfig = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
        }
      }
    }
  ]
}

/**
 * @type webpack.Configuration
 */
const settings = {
  entry: ["regenerator-runtime/runtime.js", resolveApp("src/index.tsx")],
  target: "web",
  mode: isEnvProduction ? "production" : "development",
  devtool: isEnvProduction ? false : "cheap-module-source-map",
  output: {
    path: resolveApp("dist"),
    publicPath: "/",
    filename: isEnvProduction
      ? 'static/js/[name].[contenthash:8].js'
      : 'static/js/bundle[name].js',
    chunkFilename: isEnvProduction
      ? 'static/js/[name].[contenthash:8].chunk.js'
      : 'static/js/[name].chunk.js',
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json"],
    alias: {
      "@pages": resolveApp("src/pages"),
      "@components": resolveApp("src/components"),
      "@stores": resolveApp("src/stores"),
      "@hooks": resolveApp("src/hooks"),
      "@assets": resolveApp("src/assets"),
    }
  },
  optimization: {
    minimize: isEnvProduction,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
    splitChunks: isEnvProduction && {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: resolveApp("src"),
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                useBuiltIns: 'entry',
                corejs: 3,
                exclude: ['transform-typeof-symbol'],
              },
            ],
            "@babel/preset-typescript",
            "@babel/preset-react",
          ],
          plugins: [
            ["@babel/plugin-proposal-decorators", { legacy: true }],
            ["@babel/plugin-transform-react-jsx", { runtime: "automatic" }],
            "@babel/plugin-proposal-class-properties",
            isEnvDevelopment && "react-refresh/babel",
          ].filter(Boolean),
          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true,
          cacheCompression: false,
          compact: isEnvProduction,
        }
      },
      {
        test: /\.css$/u,
        exclude: /\.module\.css$/u,
        use: [
          isEnvDevelopment && "style-loader",
          isEnvProduction && MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                mode: "global"
              }
            },
          },
        ].filter(Boolean)
      },
      {
        test: /\.module\.css$/u,
        use: [
          isEnvDevelopment && "style-loader",
          isEnvProduction && MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                mode: "local",
                localIdentName: "[local]_[hash:base64:5]",
              }
            },
          },
        ].filter(Boolean)
      },
      {
        test: /\.scss$/u,
        exclude: /\.module\.scss$/u,
        use: [
          isEnvDevelopment && "style-loader",
          isEnvProduction && MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[local]_[hash:base64:5]",
              },
              importLoaders: 1,
            },
          },
          {
            loader: "sass-loader",
            options: {
              additionalData: '@import "variables"; @import "mixins";',
              sassOptions: {
                includePaths: [resolveApp("./src/assets/styles")],
              },
            },
          },
        ].filter(Boolean)
      },
      {
        test: /\.module\.scss$/u,
        use: [
          isEnvDevelopment && "style-loader",
          isEnvProduction && MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[local]_[hash:base64:5]",
              },
              importLoaders: 1,
            },
          },
          {
            loader: "sass-loader",
            options: {
              additionalData: '@import "variables"; @import "mixins";',
              sassOptions: {
                includePaths: [resolveApp("./src/assets/styles")],
              },
            },
          },
        ].filter(Boolean)
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.webp$/],
        issuer: /\.tsx?$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 2 * 1024 // 2kb
          }
        },
        generator: {
          filename: "static/media/[name]__[hash][ext]"
        }
      },
      {
        test: [/\.otf$/, /\.ttf$/, /\.woff2?$/],
        type: "asset/resource",
        generator: {
          filename: "static/fonts/[name]__[hash][ext]"
        }
      },
      {
        test: /\.svg$/i,
        issuer: /\.s?css?$/,
        type: "asset",
        use: [{
          loader: "image-webpack-loader", options: {
            svgo: svgoConfig,
          }
        }],
        parser: {
          dataUrlCondition: {
            maxSize: 2 * 1024 // 2kb
          }
        },
        generator: {
          filename: "static/media/[name]__[hash][ext]"
        }
      },
      {
        test: /\.svg$/i,
        issuer: /\.tsx?$/,
        type: "asset",
        resourceQuery: /url/, // *.svg?url,
        use: [{
          loader: "image-webpack-loader", options: {
            svgo: svgoConfig,
          }
        }],
        parser: {
          dataUrlCondition: {
            maxSize: 2 * 1024 // 2kb
          }
        },
        generator: {
          filename: "static/media/[name]__[hash][ext]"
        }
      },
      {
        test: /\.svg$/i,
        issuer: /\.tsx?$/,
        resourceQuery: "", // Only *.svg
        use: [{ loader: "@svgr/webpack", options: { svgoConfig } }],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      Object.assign(
        {},
        {
          inject: true,
          template: resolveApp("public/index.html"),
        },
        isEnvProduction
          ? {
            minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true,
            },
          }
          : undefined
      )
    ),
    new ForkTsCheckerPlugin(),
    isEnvDevelopment && new webpack.HotModuleReplacementPlugin(),
    isEnvDevelopment && new ReactRefreshWebpackPlugin(),
    isEnvProduction && new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
    }),
    new CopyPlugin({
      patterns: [{
        from: resolveApp("public/"),
        globOptions: {
          ignore: ["**.html"],
        }
      }]
    }),
    new webpack.EnvironmentPlugin(isEnvProduction
      ? require(resolveApp("environments/env.prd.js"))
      : require(resolveApp("environments/env.dev.js"))
    ),
  ].filter(Boolean),
  devServer: {
    static: {
      directory: resolveApp("public"),
      publicPath: "/",
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    historyApiFallback: true,
  },
}

module.exports = settings;