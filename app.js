"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class AppClass {
    constructor() {
        this._port = 3080;
        console.log('Application started...');
        this._expressServer = express();
        this._startServer();
    }
    _startServer() {
        this._expressServer.listen(this._port, () => {
            console.log('Server is listening on port ', this._port);
        });
    }
}
exports.AppClass = AppClass;
//# sourceMappingURL=app.js.map