import * as express from 'express';
import * as httpServer from 'http';
import * as io from 'socket.io';
import * as WebSocket from 'ws';

import { MainRouterClass } from './router/main.router';

export class AppClass{   
    private _port:number=3080;

    constructor(){
        console.log('Application started...');

        const expressServer = express();        

        let mainRouter:MainRouterClass=new MainRouterClass();
        expressServer.use(mainRouter.router);        

        const server = new httpServer.Server(expressServer);
        
 /*        let webSocket:io.Server = io(server);        
        webSocket.on('connection',
            (s:io.Socket)=>{
                console.log('socket.io connection...', s);
            }
        ); */
        const wss = new WebSocket.Server({server});

        wss.on('connection', (ws: WebSocket) => {
            console.log('socket.io connection...');
            //connection is up, let's add a simple simple event
            ws.on('message', (message: string) => {
        
                //log the received message and send it back to the client
                console.log('received: %s', message);
                ws.send(`Hello, you sent -> ${message}`);
            });
        
            //send immediatly a feedback to the incoming connection    
            ws.send('Hi there, I am a WebSocket server');
        });

        server.listen(
            this._port,
            ()=>{
                console.log('Server is listening on port ', this._port);
            }
        );

        /* this._httpServer = this._expressServer.listen(
            this._port,
            ()=>{
                console.log('Server is listening on port ', this._port);
                let webSocket = io(this._httpServer);
                webSocket.on('connection',
                    (s:io.Socket)=>{
                        console.log('socket.io connection...', s);
                    }
                );
            }
        )               */
    }    
}
