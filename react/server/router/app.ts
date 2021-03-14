import {ErrorRequestHandler, RequestHandler, Router} from 'express';

import {renderApp} from 'server/controllers';
import {
    cookieParser,
    helmet,
} from 'server/middlewares';

const middlewares: Array<RequestHandler | ErrorRequestHandler> = [
    cookieParser,
    helmet,
];

export function appRoutes(router: Router) {
    router.get('/', middlewares, renderApp);
}
