import {Nullable} from 'utils';

const {networkInterfaces} = require('os');

export function findIP(): Nullable<string> {
    const nets = networkInterfaces();
    let result = null;

    for (const name of Object.keys(nets)) {
        for (const net of nets[name]) {
            if (net.family === 'IPv4' && !net.internal && net.address.startsWith('192')) {
                result = net.address;
                break;
            }
        }
    }

    return result;
}
