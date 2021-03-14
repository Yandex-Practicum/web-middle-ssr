import path from 'path';

import {ENVS} from './env';

export const ROOT_DIR_FROM_WEBPACK = path.join(__dirname, '../../');
export const ROOT_DIR_FROM_DIST_SERVER = path.join(__dirname, '..', '..');

export const ROOT_DIR = ENVS.__DEV__
    ? ROOT_DIR_FROM_DIST_SERVER // In DEV mode webpack is running from %project-root%/dist/server
    : ROOT_DIR_FROM_WEBPACK; // Otherwise from %project-root%/webpack

export const DIST_DIR = path.join(ROOT_DIR, 'dist');
export const SERVER_DIR = path.join(ROOT_DIR, 'server');
export const CLIENT_DIR = path.join(ROOT_DIR, 'client');
