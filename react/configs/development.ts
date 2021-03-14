import {AppConfig} from 'cfg';

const config: AppConfig = {
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
