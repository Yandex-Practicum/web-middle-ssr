import {CSPDirectives} from 'csp-header';

const policies: CSPDirectives = {
    'img-src': [
        'storage.yandexcloud.net',
        'vg-landing.website.yandexcloud.net',
        'vg-landing-tst.website.yandexcloud.net',
        'yastatic.net',
    ],
    'font-src': [
        'storage.yandexcloud.net',
        'vg-landing.website.yandexcloud.net',
        'vg-landing-tst.website.yandexcloud.net',
        'yastatic.net',
    ],
    'connect-src': [
        'yastatic.net',
    ],
    'default-src': [
        'vg-landing.website.yandexcloud.net',
        'vg-landing-tst.website.yandexcloud.net',
    ],
    'script-src': [
        'vg-landing.website.yandexcloud.net',
        'vg-landing-tst.website.yandexcloud.net',
    ],
    'style-src': [
        'vg-landing.website.yandexcloud.net',
        'vg-landing-tst.website.yandexcloud.net',
    ],
};
export default policies;
