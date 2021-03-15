import devHosts from 'configs/hosts.json';
import {Express} from 'express';
import {readFileSync} from 'fs';
import https from 'https';
import {homedir} from 'os';
import {resolve} from 'path';
import Loadable from 'react-loadable';

import {findIP} from './network';
import {makeStartLogsText} from './startLogs';

interface Options {
    server: Express;
}

const {PORT = 3000, NODE_ENV} = process.env;
const isDev = NODE_ENV === 'development';

const APP_HOSTS = ['localhost'];

if (isDev) {
    const devLocalIP = findIP();
    if (devLocalIP) {
        APP_HOSTS.push(devLocalIP);
    }
}

export function startApp({server}: Options) {
    Loadable.preloadAll().then(() => {
        if (isDev) {
            // Можно воспользоваться самоподписанными сертификатами из библиотеки openssl-self-signed-certificate
            const pem = readFileSync(resolve(`${homedir()}/.certs`, 'dev.pem'), 'utf8');

            https
                .createServer({key: pem, cert: pem}, server)
                .listen(PORT, '0.0.0.0' as any, () => {
                    // eslint-disable-next-line
                    console.log(makeStartLogsText(
                        APP_HOSTS.concat(...devHosts.map(({host}) => host)),
                        'https',
                        PORT,
                    ));
                });
            return;
        }

        server.listen(PORT, () => {
            // eslint-disable-next-line
            console.log(makeStartLogsText(APP_HOSTS, 'http', PORT));
        });
    });
}
