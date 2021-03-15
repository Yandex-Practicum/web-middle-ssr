import mergeOptions from 'merge-options';
import path from 'path';
import pkgDir from 'pkg-dir';

const CONFIG_DIR = process.env.CFG_DIR || path.join(pkgDir.sync() || '', 'configs');
const ENV = process.env.CONFIG_ENV || process.env.NODE_ENV;

let defaultConfig;
try {
    defaultConfig = require(path.join(CONFIG_DIR, 'defaults'));
} catch (err) {
    if (err.code !== 'MODULE_NOT_FOUND') {
        throw err;
    }

    // eslint-disable-next-line
    console.warn('[cfg] Warning: could not load default config', err);
}

let environmentConfig;
try {
    if (ENV) {
        environmentConfig = require(path.join(CONFIG_DIR, ENV));
    }
} catch (err) {
    if (err.code !== 'MODULE_NOT_FOUND') {
        throw err;
    }

    // eslint-disable-next-line
    console.warn(`[cfg] Warning: could not load ${ENV} config`, err);
}

export default mergeOptions({environment: ENV}, defaultConfig, environmentConfig);
