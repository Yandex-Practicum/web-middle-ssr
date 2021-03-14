import {Express} from 'express';
import Loadable from 'react-loadable';

interface Options {
    server: Express;
}

const {PORT = 3000} = process.env;

const APP_HOSTS: string[] = [
    'localhost',
];

export function startApp({server}: Options) {
    Loadable.preloadAll().then(() => {
        server.listen(PORT, () => {
            // eslint-disable-next-line
            console.log(`App on http://${APP_HOSTS}:${PORT}`);
        });
    });
}
