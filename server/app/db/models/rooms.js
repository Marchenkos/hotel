const { Schema, model } = require("mongoose");

const schema = new Schema({
    status_id: {
        type: String
    },
    room_id: {
        type: Number,
        required: true,
        index: {
            unique: true
        }
    },
    small_description: {
        type: String
    },
    description: {
        type: String
    },
    cost: {
        type: Number
    },
    square: {
        type: Number
    },
    floor: {
        type: Number
    },
});

module.exports = model("Room", schema);
