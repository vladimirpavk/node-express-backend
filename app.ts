import * as express from 'express';
import * as httpServer from 'http';
import * as io from 'socket.io';

import { MainRouterClass } from './router/main.router';

export class AppClass{
    private _expressServer: express.Express;
    private _port:number=3080;

    constructor(){
        console.log('Application started...');

        this._expressServer = express();

        let _httpServer:httpServer.Server = new httpServer.Server(this._expressServer);
        let webSocket = io(_httpServer);

        webSocket.on('connection',
            (s:io.Socket)=>{
                console.log('socket.io connection...', s);
            }
        );

        let mainRouter:MainRouterClass=new MainRouterClass();
        this._expressServer.use(mainRouter.router);

        this._startServer();
    }

    private _startServer(){
        this._expressServer.listen(
            this._port,
            ()=>{
                console.log('Server is listening on port ', this._port);
            }
        )
    }
}
