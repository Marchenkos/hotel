const { Schema, model } = require("mongoose");

const schema = new Schema({
    room_id: {
        type: Number
    },
    email: {
        type: String
    },
    ckeck_in: {
        type: String
    },
    ckeck_out: {
        type: String
    },
    cost: {
        type: Number
    },
});

module.exports = model("BookedRoom", schema);
