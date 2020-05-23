const { Schema, model } = require("mongoose");

const schema = new Schema({
    room_id: {
        type: Number
    },
    user_id: {
        type: Number
    },
    ckeck_in: {
        type: Date
    },
    ckeck_out: {
        type: Date
    },
    cost: {
        type: Number
    },
});

module.exports = model("BookedRoom", schema);
