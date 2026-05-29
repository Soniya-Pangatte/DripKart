export default {
  languageOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  rules: {
    "react/react-in-jsx-scope": "off",
  },
};
