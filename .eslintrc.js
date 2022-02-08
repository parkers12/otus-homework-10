module.exports = {
    env: {
        browser: true,
        es2021: true,
        "jest/globals": true,
    },
    extends: [ "airbnb-base", "prettier" ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 13,
        sourceType: "module"
    },
    plugins: [ "jest", "@typescript-eslint" ],
    rules: {
    },
    settings: {
        "import/resolver": {
          node: {
            extensions: [".ts", ".js"],
          },
        },
    },
};