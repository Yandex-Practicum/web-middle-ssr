export default {
    test: /\.csv$/,
    loader: 'csv-loader',
    options: {
        dynamicTyping: true,
        header: true,
        skipEmptyLines: true,
    },
};
