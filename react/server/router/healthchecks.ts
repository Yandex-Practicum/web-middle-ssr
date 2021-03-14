import {Router} from 'express';

import {ping as pingHealthcheck} from 'server/controllers/healthchecks';
import {logger} from 'server/middlewares';

export const healthRoutes = (router: Router) => {
    router
        .get('/ping', logger, pingHealthcheck);
};
