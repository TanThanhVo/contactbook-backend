import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        require: "readonly", // hoặc bật toàn bộ env Node
      },
      sourceType: "script", // CommonJS
    },
    linterOptions: {
      env: {
        node: true,
      },
    },
  },
];
