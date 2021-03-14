declare module 'brotli-webpack-plugin' {
    import {Plugin} from 'webpack';

    export enum BrotliEncoderMode {

        /**
         * Default compression mode.
         *
         * In this mode compressor does not know anything in advance about the
         * properties of the input.
         */
        Generic = 0,

        /** Compression mode for UTF-8 formatted text input. */
        Text = 1,

        /** Compression mode used in WOFF 2.0. */
        Font = 2,
    }

    export interface BrotliWebpackPluginOptions {

        /**
         * The target asset name. Defaults to '[path].br[query]'.
         *
         * [file] is replaced with the original asset file name.
         * [fileWithoutExt] is replaced with the file name minus its extension, e.g. the style of style.css.
         * [ext] is replaced with the file name extension, e.g. the css of style.css.
         * [path] is replaced with the path of the original asset.
         * [query] is replaced with the query.
         */
        asset?: string;

        /**
         * Remove original files that were compressed with brotli.
         * Default: false.
         */
        deleteOriginalAssets?: boolean;

        /**
         * Flag that affects usage of "literal context modeling" format feature.
         * Defaults: false.
         *
         * This flag is a "decoding-speed vs compression ratio" trade-off.
         *
         * See:
         * https://github.com/MayhemYDG/iltorb#brotliencodeparams
         */
        disable_literal_context_modeling?: boolean; // eslint-disable-line camelcase

        /**
         * Flag that determines if "Large Window Brotli" is used.
         * Defaults to false.
         *
         * See:
         * https://github.com/google/brotli/commit/35e69fc7cf9421ab04ffc9d52cb36d07fa12984a
         */
        large_window?: boolean; // eslint-disable-line camelcase

        /**
         * Recommended sliding LZ77 window size.
         * Defaults to 10.
         *
         * Encoder may reduce this value,
         * e.g. if input is much smaller than window size.
         *
         * Window size is `(1 << value) - 16`.
         *
         * Range is from 10 to 24.
         *
         * See:
         * https://github.com/MayhemYDG/iltorb#brotliencodeparams
         */
        lgwin?: number;

        /**
         * Recommended input block size.
         * Defaults to 16.
         *
         * Encoder may reduce this value,
         * e.g. if input is much smaller than input block size.
         *
         * Range is from 16 to 24.
         *
         * @note Bigger input block size allows better compression, but consumes more
         *       memory. \n The rough formula of memory used for temporary input
         *       storage is `3 << lgblock`.
         */
        lgblock?: number;

        /**
         * Only assets that compress better that this ratio are processed.
         * Defaults to 0.8.
         */
        minRatio?: number;

        mode?: BrotliEncoderMode;

        /**
         * Recommended number of direct distance codes.
         * Defaults to 0.
         *
         * Encoder may change this value.
         *
         * Range is from 0 to (15 << npostfix) in steps of (1 << npostfix).
         */
        ndirect?: number;

        /**
         * Recommended number of postfix bits.
         * Defaults to 0.
         *
         * Encoder may change this value.
         *
         * Range is from 0 to 3.
         */
        npostfix?: number;

        /**
         * The main compression speed-density lever.
         * Defaults to 11.
         *
         * The higher the quality, the slower the compression. Range is
         * from 0 to 1.
         */
        quality?: number;

        /**
         * Estimated total input size.
         * Defaults to 0.
         *
         * The default value is 0, which means that the total input size is unknown.
         */
        size_hint?: number; // eslint-disable-line camelcase

        /**
         * All assets matching this RegExp are processed. Defaults to every asset.
         *
         * Example:
         * /\.(js|css|html|svg)$/
         */
        test?: RegExp;

        /**
         * Only assets bigger than this size (in bytes) are processed.
         * Defaults to 0.
         */
        threshold?: number;
    }

    class BrotliWebpackPlugin extends Plugin {
        constructor(options?: BrotliWebpackPluginOptions);
    }

    export default BrotliWebpackPlugin;
}
