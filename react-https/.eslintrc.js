module.exports = {
    root: true,
    plugins: [
        'eslint-plugin',
        '@typescript-eslint',
        'import',
        'eslint-comments',
        'react',
        'react-hooks',
    ],
    env: {
        es6: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: false,
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': [ '.ts', '.tsx' ]
        }
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ],
    rules: {
        // Code-style
        'arrow-parens': [
            'error',
            'as-needed'
        ],
        camelcase: 0,
        'class-methods-use-this': 0,
        'consistent-return': 0,
        'comma-dangle': [
            'warn',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'always-multiline'
            }
        ],
        quotes: ['error', 'single'],
        'jsx-quotes': ['error', 'prefer-double'],
        'import/no-extraneous-dependencies': 0,
        'import/order': [
            'warn',
            {
                groups: [
                    ['builtin', 'external'],
                    'internal',
                    ['parent', 'sibling'],
                    'index'
                ],
                pathGroups: [
                    {
                        pattern: 'webpack/**',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: 'client/**',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: 'server/**',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: './*.{scss,css}',
                        group: 'index',
                        position: 'after',
                    },
                    {
                        pattern: 'client/assets/**',
                        group: 'index',
                        position: 'after',
                    },
                    {
                        pattern: 'www/**',
                        group: 'index',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: ['builtin'],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true
                },
                'newlines-between': 'always'
            }
        ],
        'indent': [
            'error',
            4,
            {
                SwitchCase: 1
            }
        ],
        'max-len': [
            'error',
            {
                code: 150,
                tabWidth: 4,
                ignoreComments: true,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true
            }
        ],
        'max-params': 0,
        'space-in-parens': ['error', 'never'],
        'array-bracket-spacing': ['error', 'never'],
        'space-before-blocks': ['error', 'always'],
        'keyword-spacing': ['error', { before: true, after: true }],
        semi: ['error', 'always'],
        'eol-last': ['error', 'always'],
        'no-cond-assign': [
            'error',
            'except-parens'
        ],
        'no-implicit-coercion': 0,
        'no-else-return': 0,
        'no-extra-boolean-cast': 0,
        'no-nested-ternary': 0,
        'no-plusplus': 0,
        'no-prototype-builtins': 0,
        'no-return-await': 0,
        'no-underscore-dangle': 0,
        'no-unused-vars': 0,
        'no-use-before-define': 0,
        'no-useless-escape': 0,
        'prefer-rest-params': 0,
        'object-curly-spacing': [
            'error',
            'never'
        ],
        'operator-linebreak': 0,
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        'no-console': 'error',
        'no-process-exit': 'error',

        // TypeScript
        '@typescript-eslint/no-angle-bracket-type-assertion': 0,
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/no-unnecessary-type-assertion': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-misused-promises': 0,
        '@typescript-eslint/no-this-alias': 0,
        '@typescript-eslint/unbound-method': 0,
        '@typescript-eslint/await-thenable': 0,
        '@typescript-eslint/prefer-regexp-exec': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/ban-ts-ignore': 0,
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                "vars": "all",
                "args": "all",
                "varsIgnorePattern": "^_",
                "argsIgnorePattern": "^_",
                "ignoreRestSiblings": true
            }
        ],

        // ASCII
        'ascii/valid-name': 0,

        // React
        'react/jsx-wrap-multilines': 'error',
        'react/jsx-no-bind': 0,
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/display-name': 0,
        'react/prop-types': 0,
        'react/no-children-prop': 0,
        'react/jsx-curly-spacing': [
            'error',
            {
                when: 'never',
            },
        ],
        'react/jsx-tag-spacing': [
            'warn',
            {
                closingSlash: 'never',
                beforeSelfClosing: 'never',
                afterOpening: 'never',
                beforeClosing: 'never'
            }
        ],

        // React Hooks
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': 2,
    }
};
