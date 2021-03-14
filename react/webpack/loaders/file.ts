const cfg = require('../../lib/cfg').default;

const filenameRegexp = /^(?!.*\.inline).*\.(jpe?g|png|gif|eot|woff2?|ttf)$/;

export default {
    client: {
        loader: 'file-loader',
        test: filenameRegexp,
        query: {
            name: '[hash].[ext]',
            outputPath: './',
            publicPath: cfg.static.baseUrl,
        },
    },

    ssr: {
        loader: 'file-loader',
        test: filenameRegexp,
        query: {
            name: '[hash].[ext]',
            outputPath: './client/',
            publicPath: cfg.static.baseUrl,
        },
    },
};
