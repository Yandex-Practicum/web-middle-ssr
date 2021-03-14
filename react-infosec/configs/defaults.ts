import {AppConfig} from 'cfg';
import {join} from 'path';

import defaultsCsp from './csp/defaults';

const config: AppConfig = {
    csp: {
        presets: defaultsCsp,
        policies: {},
        serviceName: 'ssr-app',
        useDefaultReportUri: true,
    },

    langs: ['ru'],

    static: {
        dir: join(__dirname, '..', 'client'),
        staticDir: join(__dirname, '..', '..', 'static'),
    },

    render: {
        isHot: false,
    },
};

module.exports = config;
