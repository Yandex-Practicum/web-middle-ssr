import {CSPDirectives} from 'csp-header';

const policies: CSPDirectives = {
    'style-src': ['fonts.googleapis.com'],
    'font-src': ['fonts.googleapis.com', 'fonts.gstatic.com'],
};

export default policies;
