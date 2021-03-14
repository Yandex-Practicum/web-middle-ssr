import {CSPDirectives} from 'csp-header';

import coreCspPreset from './presets/core';
import dataUriCspPreset from './presets/data-uri';
import googleFontsPreset from './presets/google-fonts';
import mdsCspPreset from './presets/mds';
import metrikaCspPreset from './presets/metrika';
import webvisorCspPreset from './presets/webvisor';

const presets: CSPDirectives[] = [
    coreCspPreset,
    dataUriCspPreset,
    mdsCspPreset,
    metrikaCspPreset,
    webvisorCspPreset,
    googleFontsPreset,
];

export default presets;
