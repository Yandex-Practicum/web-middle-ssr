import {ErrorRequestHandler, RequestHandler, Router} from 'express';

import {renderApp} from 'server/controllers';
import {
    cookieParser,
    cspHeader,
    helmet,
    csrfProtection,
} from 'server/middlewares';

const middlewares: Array<RequestHandler | ErrorRequestHandler> = [
    cookieParser,
    helmet,
    cspHeader,
    csrfProtection,
];

export function appRoutes(router: Router) {
    router.get('/', middlewares, renderApp);
}
