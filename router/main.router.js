"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const message_router_1 = require("./message.router");
class MainRouterClass {
    get router() {
        return this._router;
    }
    constructor() {
        this._router = express_1.Router();
        let messageRouter = new message_router_1.MessageRouterClass();
        this._router.use('/', messageRouter.router);
    }
}
exports.MainRouterClass = MainRouterClass;
//# sourceMappingURL=main.router.js.map