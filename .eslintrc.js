/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint.
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  plugins: ['eslint-plugin-unicorn', 'eslint-plugin-import', '@typescript-eslint', 'rxjs', 'functional'],
  rules: {
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          '{}': false
        },
        extendDefaults: true
      }
    ],
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'angle-bracket',
        objectLiteralTypeAssertions: 'allow'
      }
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    ],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase']
      },
      {
        selector: 'variable',
        modifiers: ['const'],
        format: ['camelCase', 'UPPER_CASE']
      },
      {
        selector: 'function',
        format: ['camelCase']
      },
      {
        selector: 'enum',
        format: ['PascalCase']
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE']
      },
      {
        selector: 'property',
        modifiers: ['private', 'readonly', 'static'],
        format: ['UPPER_CASE']
      },
      {
        selector: 'property',
        modifiers: ['protected', 'readonly', 'static'],
        format: ['UPPER_CASE']
      },
      {
        selector: 'property',
        modifiers: ['private', 'readonly'],
        format: ['camelCase'],
        leadingUnderscore: 'require'
      },
      {
        selector: 'property',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'require'
      },
      {
        selector: 'property',
        modifiers: ['protected', 'readonly'],
        format: ['camelCase'],
        leadingUnderscore: 'require'
      },
      {
        selector: 'property',
        modifiers: ['protected'],
        format: ['camelCase'],
        leadingUnderscore: 'require'
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false
        }
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        prefix: ['T']
      },
      {
        selector: 'class',
        modifiers: ['abstract'],
        format: ['PascalCase'],
        prefix: ['Abstract']
      }
    ],
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: true,
        ignoreProperties: true
      }
    ],
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/typedef': 'error',
    'arrow-body-style': 'error',
    'arrow-spacing': 'error',
    curly: 'error',
    'eol-last': 'error',
    'functional/prefer-readonly-type': [
      'error',
      {
        ignoreClass: true
      }
    ],
    'import/no-default-export': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'unknown', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin']
      }
    ],
    'max-len': [
      'error',
      {
        code: 140
      }
    ],
    'no-empty': 'error',
    'no-eval': 'error',
    'no-extra-bind': 'error',
    'no-invalid-this': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1
      }
    ],
    'no-param-reassign': 'error',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'TSEnumDeclaration:not([const=true])',
        message: "Don't declare non-const enums"
      }
    ],
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-object-spread': 'error',
    'rxjs/suffix-subjects': 'error',
    'rxjs/finnish': 'error',
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/']
      }
    ],
    'unicorn/error-message': 'error',
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase'
      }
    ],
    'unicorn/no-null': 'error',
    'unicorn/prefer-spread': 'error',
    'unicorn/throw-new-error': 'error'
  }
};
