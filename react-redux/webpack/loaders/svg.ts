import fileLoader from './file';

const MAX_INLINE_SIZE = 1024;

const svgoLoader = {
    loader: 'svgo-loader',
    options: {
        plugins: [
            {convertColors: {shorthex: false}},
            {convertPathData: false},
            {removeTitle: true},
            {removeUselessDefs: false},
        ],
    },
};

export default {
    client: {
        test: /\.svg$/,
        use: [
            {
                loader: 'svg-url-loader',
                query: {
                    ...fileLoader.client.query,
                    noquotes: true,
                    limit: MAX_INLINE_SIZE,
                },
            },
            svgoLoader,
        ],
    },

    ssr: {
        test: /\.svg$/,
        use: [
            {
                loader: 'svg-url-loader',
                query: {
                    ...fileLoader.ssr.query,
                    noquotes: true,
                    limit: MAX_INLINE_SIZE,
                },
            },
            svgoLoader,
        ],
    },
};
