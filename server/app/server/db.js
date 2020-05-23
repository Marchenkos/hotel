const mongoose = require("mongoose");
const dbConfig = require("../config/dbConfig");

class DB {
    connect() {
        mongoose.connect(dbConfig.connectUrl, dbConfig.connectionOptions);
        console.log("DB connection...")
    }
}

module.exports = DB;
