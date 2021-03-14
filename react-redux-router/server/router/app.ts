import {ErrorRequestHandler, RequestHandler, Router} from 'express';

import {ROUTES} from 'client/routes';

import {renderApp} from 'server/controllers';
import {cookieParser} from 'server/middlewares';

const middlewares: Array<RequestHandler | ErrorRequestHandler> = [
    cookieParser,
];

const allRoutes = (function flatRoutes(routesMap: object): string[] {
    return Object.values(routesMap).reduce<string[]>(
        (routes, path) =>
            routes.concat(typeof path === 'object' ? flatRoutes(path) : path),
        [],
    );
})(ROUTES);

export function appRoutes(router: Router) {
    router.get(allRoutes, middlewares, renderApp);
}
