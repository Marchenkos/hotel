const { Schema, model } = require("mongoose");

const schema = new Schema({
    room_id: {
        type: Number
    },
    estimation: {
        type: Number
    },
    user_login: {
        type: String
    },
});

module.exports = model("Estimation", schema);
