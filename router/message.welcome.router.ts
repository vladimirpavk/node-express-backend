import { Router, Request, Response } from 'express';

export class MessageWelcomeRouterClass{
    private _router:Router;
    public get router():Router{
        return this._router;
    }

    constructor(){
        this._router = Router();

        this._router.get('/hi', (req: Request, res:Response)=>{
            res.status(200).json({
                path: 'GET /message/hi',
                serverResponse: 'Everything is fine...',
                urlparams: req.query
            });
        });
        
        this._router.get('/hello', (req: Request, res:Response)=>{
            res.status(200).json({
                path: 'GET /message/hello',
                serverResponse: 'Everything is fine...'
            });
        });
    }
}