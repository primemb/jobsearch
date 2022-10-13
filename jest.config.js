const esModules = ["axios"].join("|");

module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transformIgnorePatterns: [`node_modules/(?!(${esModules}))`],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
};
