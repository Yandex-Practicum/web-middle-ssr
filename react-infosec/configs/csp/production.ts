import {CSPDirectives} from 'csp-header';

import defaultConfig from './defaults';
import apiCspPreset from './presets/api';
import mdsCspPreset from './presets/mds';
import passportCspPreset from './presets/passport';
import staticSelfCspPreset from './presets/static-self';

const presets: CSPDirectives[] = [
    ...defaultConfig,
    apiCspPreset,
    mdsCspPreset,
    passportCspPreset,
    staticSelfCspPreset,
];

export default presets;
