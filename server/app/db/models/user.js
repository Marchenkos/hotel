const { Schema, model } = require("mongoose");

const schema = new Schema({
    login: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    password: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    }
});

module.exports = model("User", schema);
