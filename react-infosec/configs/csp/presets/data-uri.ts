import {CSPDirectives} from 'csp-header';

const policies: CSPDirectives = {
    'img-src': ['data:'],
    'font-src': ['data:'],
};

export default policies;
