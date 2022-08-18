module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'parser': 'vue-eslint-parser',
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended'
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'parser': '@typescript-eslint/parser'
  },
  'plugins': [
    'vue',
    '@typescript-eslint'
  ],
  'rules': {
    'array-bracket-spacing': [2, 'never', {'singleValue': true}], // 数组头尾有空格
    'comma-dangle': 2, // 禁止结尾逗号
    'comma-style': 2, // 强制使用一致的逗号风格
    'comma-spacing': 2, // 逗号后存在一个空格 
    'key-spacing': 2, // 键值存在空格
    'no-extra-parens': [2, 'functions'], // 禁止无必要括号
    'block-spacing': [2, 'always'], // 代码块括号前后有空格
    'brace-style': [2, '1tbs', {'allowSingleLine': true}],
    'quotes': [2, 'single', {'allowTemplateLiterals': true}], // 尽可能使用单引号
    'array-element-newline': [2, 'consistent', { 'multiline': true }], // 数组换行
    'prefer-destructuring': [2, {'object': true}], // 优先使用解构
    'vue/multi-word-component-names': 0, // 关闭eslint检查文件名是否为驼峰命名
    'indent': [2, 2] // 统一缩进
    // '@typescript-eslint/no-explicit-any': 0 // 允许any类型出现,但是违背TypeScript的初衷
  }
}
