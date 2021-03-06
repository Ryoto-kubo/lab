module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'vue/valid-template-root': 'off',
    'vue/no-unused-vars': 'off',
    'vue/valid-v-for': 'off',
    'vue/no-multi-spaces': ['error', { ignoreProperties: false }],
    'no-extra-parens': 'warn',
    'no-multi-spaces': 'error',
    eqeqeq: ['error', 'smart'],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'block-spacing': ['error', 'always'],
    'comma-spacing': 'error',
    'computed-property-spacing': 'error',
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'minimum'
      }
    ],
    'func-call-spacing': ['error', 'never'],
    'no-spaced-func': 'error',
    'space-infix-ops': ['error', { int32Hint: false }],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['-', '+']
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true
        }
      }
    ],
    'space-in-parens': ['error', 'never'],
    'no-var': 'error',
    'space-before-function-paren': 'off',
    'space-before-blocks': [
      'error',
      {
        functions: 'always',
        keywords: 'always',
        classes: 'always'
      }
    ],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'no-unused-vars': [
      'warn',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false }
    ],
    'no-lonely-if': 'error',
    'no-trailing-spaces': 'error',
    'operator-linebreak': ['error', 'before'],
    'semi-spacing': 'error',
    'keyword-spacing': 'error',
    'arrow-parens': 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
};
