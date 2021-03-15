import {NextFunction, Request, Response} from 'express';

import renderBundle from './bundle';

export default (req: Request, res: Response, next: NextFunction) => {
    res.renderBundle = (bundleName: string, data: {}) => {
        const location = req.url;
        const {html} = renderBundle({bundleName, data, location});

        res.send(html);
    };

    next();
};
