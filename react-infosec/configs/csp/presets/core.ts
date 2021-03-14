import {
    EVAL,
    INLINE,
    NONE,
    SELF,
    CSPDirectives,
} from 'csp-header';

const policies: CSPDirectives = {
    'connect-src': [
        SELF,
        'vg-landing.website.yandexcloud.net',
        'vg-landing-tst.website.yandexcloud.net',
    ],
    'default-src': [
        NONE,
        'vg-landing.website.yandexcloud.net',
        'vg-landing-tst.website.yandexcloud.net',
    ],
    'script-src': [
        EVAL,
        INLINE,
        '%nonce%',
        'vg-landing.website.yandexcloud.net',
        'vg-landing-tst.website.yandexcloud.net',
    ],
    'style-src': [
        INLINE,
        'vg-landing.website.yandexcloud.net',
        'vg-landing-tst.website.yandexcloud.net',
    ],
    'img-src': [
        SELF,
        INLINE,
        'vg-landing.website.yandexcloud.net',
        'vg-landing-tst.website.yandexcloud.net',
    ],
};

export default policies;
