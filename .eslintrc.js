module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "airbnb-base",
    ],
    parserOptions: {
        ecmaVersion: 13,
        sourceType: "module",
    },
    rules: { semi: ["error", "always"], 
        quotes: ["error", "double", { allowTemplateLiterals: true }], 
        linebreak-style:"off",
        linebreak-style: 0,
        indent: ["error", 4], }, };


