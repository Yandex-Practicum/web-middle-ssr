import {AppConfig} from 'cfg';

import localCsp from './csp/development';

const config: AppConfig = {
    csp: {
        presets: localCsp,
    },

    langs: ['ru'],

    render: {
        isHot: true,
    },

    static: {
        baseUrl: '/static/',
        version: '',
    },
};

module.exports = config;
