import {SELF, CSPDirectives} from 'csp-header';

const policies: CSPDirectives = {
    'img-src': [SELF],
    'font-src': [SELF],
    'script-src': [SELF],
    'style-src': [SELF],
};

export default policies;
