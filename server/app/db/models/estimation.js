const { Schema, model } = require("mongoose");

const schema = new Schema({
    room_id: {
        type: Number
    },
    estimation: {
        type: Number
    },
    user_id: {
        type: Number
    },
});

module.exports = model("Estimation", schema);
