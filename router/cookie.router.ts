import { Router, Request, Response  } from 'express';
import * as bodyParser from 'body-parser';

export class CookieRouterClass{
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
        
        this._router.get('/givemesome', (req:Request, res:Response)=>{
           //establish websocket connection
        });        
    }
}