import {CSPDirectives} from 'csp-header';

const policies: CSPDirectives = {
    'frame-ancestors': ['webvisor.com', 'http://webvisor.com'],
};

export default policies;
