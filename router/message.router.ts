import { Router, Request, Response  } from 'express';
import * as bodyParser from 'body-parser';

import { MessageWelcomeRouterClass } from './message.welcome.router';

export class MessageRouterClass{
    private _router:Router;
    get router():Router{
        return this._router;
    }
    
    constructor(){
        this._router = Router();

        this._router.use(
            bodyParser.urlencoded({
                extended: true
            })
        );

        this._router.get('/', this._get);
        this._router.post('/', this._post);

        let mrc = new MessageWelcomeRouterClass();
        this._router.use('/message', mrc.router);
    }

    private _get(req:Request, res:Response){        
        res.status(200).json({
            path: 'GET /message',
            serverResponse: 'Everything is fine...'
        });
    }

    private _post(req:Request, res:Response){
        res.status(200).json({
            path: 'POST /message',
            serverResponse : req.body
        });
    }    
}