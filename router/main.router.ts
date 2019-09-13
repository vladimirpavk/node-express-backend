import { Router } from 'express';
import { MessageRouterClass } from './message.router';

export class MainRouterClass{
    private _router:Router;
    get router():Router{
        return this._router;
    }
    
    constructor(){
        this._router = Router();
        let messageRouter = new MessageRouterClass();
        this._router.use('/', messageRouter.router);
    }
}