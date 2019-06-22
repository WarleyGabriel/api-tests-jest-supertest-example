const config = {
    "extends": "airbnb-base",
    "parser": "babel-eslint"
};

config.rules = {
    ...config.rules,
    'prefer-destructuring': 'warn',
    'class-methods-use-this': 'off',
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'no-magic-numbers': ['error', {
        ignore: [200, 302, 404, 500],
        ignoreArrayIndexes: true,
        enforceConst: true,
    }],
};

config.env = {
    ...config.env,
    mocha: true,
};

module.exports = config;
