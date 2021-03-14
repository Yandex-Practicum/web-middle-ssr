import {CSPDirectives} from 'csp-header';

const policies: CSPDirectives = {
    'connect-src': ['mc.yandex.ru', 'qoopler.ru'],
    'img-src': ['mc.yandex.ru'],
    'script-src': ['mc.yandex.ru', 'qoopler.ru'],
};

export default policies;
