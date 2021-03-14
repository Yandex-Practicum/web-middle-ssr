import {AppConfig} from 'cfg';

import productionCsp from './csp/production';

const config: AppConfig = {
    csp: {
        presets: productionCsp,
    },

    static: {
        baseUrl: `//storage.yandexcloud.net/path/to/S3/${process.env.APP_VERSION}/client/`,
    },
};

module.exports = config;
