"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bodyParser = require("body-parser");
class MessageRouterClass {
    get router() {
        return this._router;
    }
    constructor() {
        this._router = express_1.Router();
        this._router.use(bodyParser.urlencoded({
            extended: true
        }));
        this._router.get('/message', this._get);
        this._router.post('/message', this._post);
    }
    _get(req, res) {
        res.status(200).json({
            path: 'GET /message',
            serverResponse: 'Everything is fine...'
        });
    }
    _post(req, res) {
        res.status(200).json({
            path: 'POST /message',
            serverResponse: req.body
        });
    }
}
exports.MessageRouterClass = MessageRouterClass;
//# sourceMappingURL=message.router.js.map