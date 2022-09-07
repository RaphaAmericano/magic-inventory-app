module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/identity-obj-proxy",
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "^@pages(.*)$": "<rootDir>/src/pages$1",
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@stores(.*)$": "<rootDir>/src/stores$1",
    "^@assets(.*)$": "<rootDir>/src/assets$1",
  }
};
