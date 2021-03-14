import {ErrorRequestHandler, RequestHandler, Router} from 'express';

import {renderApp} from 'server/controllers';
import {cookieParser} from 'server/middlewares';

const middlewares: Array<RequestHandler | ErrorRequestHandler> = [
    cookieParser,
];

export function appRoutes(router: Router) {
    router.get('/', middlewares, renderApp);
}
