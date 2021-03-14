import {AppConfig} from 'cfg';

const config: AppConfig = {
    static: {
        baseUrl: `//storage.yandexcloud.net/path/to/S3/${process.env.APP_VERSION}/client/`,
        frozenPath: '/_',
        version: '',
    },
};

module.exports = config;
