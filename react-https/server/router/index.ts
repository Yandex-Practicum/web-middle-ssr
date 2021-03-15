import {Router} from 'express';

import {appRoutes} from './app';
import {healthRoutes} from './healthchecks';
import {staticRoutes} from './static';

const router: Router = Router();

appRoutes(router);
staticRoutes(router);
healthRoutes(router);

export default router;
