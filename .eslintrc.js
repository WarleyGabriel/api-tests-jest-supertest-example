module.exports = {
    rules: {
        'prefer-destructuring': 'warn',
        'class-methods-use-this': 'off',
        'global-require': 'off',
        'import/prefer-default-export': 'off',
        'no-magic-numbers': ['error', {
            ignore: [0],
            ignoreArrayIndexes: true,
            enforceConst: true,
        }],
    },
    env: {
        mocha: true,
    },
    extends: [
        'airbnb-base',
        'prettier',
    ]
};
