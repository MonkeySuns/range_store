module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "parser": "vue-eslint-parser",
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "parser": "@typescript-eslint/parser"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        "array-bracket-spacing": [ 2, "always" ], // 数组头尾有空格
        "comma-dangle": 2, // 禁止结尾逗号
        "comma-style": 2, // 强制使用一致的逗号风格
        "comma-spacing": 2, // 逗号后存在一个空格 
        "key-spacing": 2 // 键值存在空格
    }
}
