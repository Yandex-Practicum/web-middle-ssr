import CopyWebpackPlugin from 'copy-webpack-plugin';

import {csv, file, svg, url} from '../loaders';

export default ({
    isCopyStatic = true,
} = {}) => webpackConfig => {
    webpackConfig.module.rules.push(
        csv,
        file.ssr,
        svg.ssr,
        url,
    );

    if (isCopyStatic) {
        webpackConfig.plugins.push(
            new CopyWebpackPlugin({
                patterns: [
                    {from: './www/favicons', to: 'favicons'},
                    {from: './www/robots.txt', to: ''},
                ],
            }),
        );
    }

    return webpackConfig;
};
