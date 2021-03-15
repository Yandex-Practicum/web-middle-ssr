import {RequestHandler} from 'express';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';

import webpackConfigs from 'webpack/config/client.config';

import render from './render';

function getWebpackMiddlewares(config: webpack.Configuration, index: number): RequestHandler[] {
    const compiler = webpack({...config, mode: 'development'});

    return [
        devMiddleware(compiler, {
            logLevel: 'error',
            publicPath: config.output!.publicPath!,
        }),
        hotMiddleware(compiler, {path: `/__webpack_hmr_${index}`}),
    ];
}

export default [
    ...webpackConfigs.reduce((middlewares, config, index) => [
        ...middlewares,
        ...getWebpackMiddlewares(config, index),
    ], []),
    render,
];
