import express, {Express} from 'express';

import {queryParser} from 'server/controllers';
import {render, logger} from 'server/middlewares';
import router from 'server/router';

const server: Express = express();

server
    .disable('x-powered-by')
    .enable('trust proxy')
    .set('query parser', queryParser)
    .use(render)
    .use(logger)
    .use(router);

export default server;
