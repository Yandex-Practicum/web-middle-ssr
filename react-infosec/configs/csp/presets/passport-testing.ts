import {CSPDirectives} from 'csp-header';

const policies: CSPDirectives = {
    'script-src': ['pass.yandex.%tld%', 'social.yandex.ru'],
};

export default policies;
