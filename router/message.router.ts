import { Router, Request, Response  } from 'express';
import * as bodyParser from 'body-parser';

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

        this._router.get('/message', this._get);
        this._router.post('/message', this._post);
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