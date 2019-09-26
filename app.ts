import * as express from 'express';
import * as http from 'http';
import * as graphqlHttp from 'express-graphql';

import { GraphqlSchema } from './graphql/schema';
import { GraphqlResolvers } from './graphql/resolvers';

/* import * as socketIo from 'socket.io';
import * as WebSocket from 'ws';

import { MainRouterClass } from './router/main.router'; */

export class AppClass{   
    private _port:number=3080;

    constructor(){
        console.log('Application started...');      

        const graphqlSchema = new GraphqlSchema();
        const graphqlResolvers = new GraphqlResolvers();

        const expressServer = express(); 
        expressServer.use(
            '/graphql',
            graphqlHttp({
                schema: graphqlSchema.getSchema(),
                rootValue: graphqlResolvers,
                graphiql: true/* ,
                customFormatErrorFn(error){
                    console.log(error);
                    return error;
                } */
            })
        );

        expressServer.use((error, req, res, next)=>{
            console.log(error);
        });

        const server = http.createServer(expressServer);
        server.listen(
            this._port,
            ()=>{
                console.log('Server is listening on port ', this._port);
            }
        );

    }    
}

  //socket.io standalone server
     /*    let ioServer = socketIo();
        ioServer.on('connection',
            (s)=>{
                console.log('socket.io connection...', s);
                s.on('message',
                    (msg:string)=>{
                        console.log(msg);
                    })
            }
        );
        ioServer.listen(3080); */

     /*    const expressServer = express();        

        let mainRouter:MainRouterClass=new MainRouterClass();
        expressServer.use(mainRouter.router);        

        const server = http.createServer(expressServer);
        
        let webSocket = socketIo(server);
        webSocket.on('connection',
            (s)=>{
                console.log('socket.io connection...', s);
                s.on('message',
                    (msg:string)=>{
                        console.log(msg);
                    })
            }
        ); */
        
/*         const wss = new WebSocket.Server({server});

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
        }); */

     /*    server.listen(
            this._port,
            ()=>{
                console.log('Server is listening on port ', this._port);
            }
        ); */