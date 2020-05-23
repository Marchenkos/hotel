const express = require("express");
const bodyParser = require("body-parser");

const serverConfig  = require("../config/serverConfig");
const Router = require("./router");
const DB = require("./db");
const ErrorBoundary = require("./ErrorHandler");

const urlencodedParser = bodyParser.urlencoded({extended: false});

class Server {
    constructor() {
        this.app = express();
    }

    start() {
        this.connectMiddlewares();
        this.connectRouters();
        this.connectDB();
        this.connectErrors();

        this.app.listen(serverConfig.serverPort, () => {
            console.log(`Server is loaded ${serverConfig.serverPort}`);
        });
    }

    connectMiddlewares() {
        this.app.use((req, res, next) => {
            res.setHeader("Access-Control-Allow-Origin", "*");
        
            next();
        });

        this.app.use(urlencodedParser);
    }

    connectRouters() {
        const router = new Router(this.app);

        router.connect();
    }

    connectErrors() {
        const errorBoundary = new ErrorBoundary(this.app);

        errorBoundary.connect();
    }

    connectDB() {
        const db = new DB();

        db.connect();
    }
}

module.exports = Server;
