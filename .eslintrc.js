module.exports = {
  env: {
    es2022: true
  },
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  ignorePatterns: ['**/*.ejs'],
  parserOptions: {
    ecmaVersion: "latest",
    project: "tsconfig.json",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "curly": "off",
    "react/react-in-jsx-scope": "off",
  }
}