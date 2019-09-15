import { Router } from 'express';
import { MessageRouterClass } from './message.router';
import { CookieRouterClass } from './cookie.router';

export class MainRouterClass{
    private _router:Router;
    get router():Router{
        return this._router;
    }
    
    constructor(){
        this._router = Router();

        let messageRouter = new MessageRouterClass();
        this._router.use('/message', messageRouter.router);
        
        let cookieRouter = new CookieRouterClass();
        this._router.use('/cookie', cookieRouter.router);
    }
}