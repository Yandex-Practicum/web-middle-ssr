import {config} from 'dotenv';
import flow from 'lodash.flow';
import webpack from 'webpack';

import {
    initClientConfig,
    loadAssets,
    loadScripts,
    loadStyles,
} from '../settings';

config();

// eslint-disable-next-line
const cfg = require('../../lib/cfg').default;

function getConfig(lang: string, index: number): webpack.Configuration {
    return flow([
        initClientConfig({lang, index}),
        loadScripts({isSSR: false}),
        loadStyles({isSSR: false}),
        loadAssets({isCopyStatic: false}),
    ])({});
}

export default cfg.langs.map(getConfig);
