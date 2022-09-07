const webpack = require('../webpack.config.js');

const customRules = webpack.module.rules.map(rule => {
  if (rule.loader !== "babel-loader") {
    return rule;
  }

  const plugins = rule.options.plugins.filter(plugin => plugin !== "react-refresh/babel");

  return { ...rule, options: { ...rule.options, plugins } };
});

module.exports = {
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/react",
  core: {
    "builder": "webpack5"
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: webpack.resolve.alias
      },
      module: {
        ...config.module,
        rules: customRules,
      }
    };
  },
}