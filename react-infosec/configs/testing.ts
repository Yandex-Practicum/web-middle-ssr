import {AppConfig} from 'cfg';

import testingCsp from './csp/testing';

const config: AppConfig = {
    csp: {
        presets: testingCsp,
    },

    static: {
        baseUrl: `//storage.yandexcloud.net/path/to/S3/${process.env.APP_VERSION}/client/`,
        frozenPath: '/_',
        version: '',
    },
};

module.exports = config;
