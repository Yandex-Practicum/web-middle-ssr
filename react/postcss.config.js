/* eslint-disable global-require */

module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-nested'),
        require('postcss-preset-env'),
        require('postcss-reporter'),
        require('cssnano')({
            preset: 'default'
        }),
        require('postcss-custom-selectors'),
        require('postcss-custom-media')()
    ]
};
