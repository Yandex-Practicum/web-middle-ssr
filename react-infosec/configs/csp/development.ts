import {CSPDirectives} from 'csp-header';

import defaultConfig from './defaults';
import apiTestingCspPreset from './presets/api-testing';
import mdsTestingCspPreset from './presets/mds-testing';
import passportTestingCspPreset from './presets/passport-testing';
import staticSelfCspPreset from './presets/static-self';

const presets: CSPDirectives[] = [
    ...defaultConfig,
    apiTestingCspPreset,
    mdsTestingCspPreset,
    passportTestingCspPreset,
    staticSelfCspPreset,
];

export default presets;
