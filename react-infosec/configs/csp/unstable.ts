import {CSPDirectives} from 'csp-header';

import defaultConfig from './defaults';
import apiTestingCspPreset from './presets/api-testing';
import mdsTestingCspPreset from './presets/mds-testing';
import passportCspPreset from './presets/passport-testing';
import staticSelfCspPreset from './presets/static-self';

const presets: CSPDirectives[] = [
    ...defaultConfig,
    apiTestingCspPreset,
    mdsTestingCspPreset,
    passportCspPreset,
    staticSelfCspPreset,
];

export default presets;
