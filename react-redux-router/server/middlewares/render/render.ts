import {NextFunction, Request, Response} from 'express';

import renderBundle from './bundle';

export default (req: Request, res: Response, next: NextFunction) => {
    res.renderBundle = (bundleName: string, data: {}) => {
        const location = req.url;
        const {html, redirectUrl} = renderBundle({bundleName, data, location});

        if (redirectUrl) {
            res.redirect(redirectUrl);
            return;
        }

        res.send(html);
    };

    next();
};
