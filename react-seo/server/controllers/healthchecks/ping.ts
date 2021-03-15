import {Request, Response} from 'express';

export default function ping(_req: Request, res: Response) {
    res.sendStatus(200);
}
