const { Schema, model } = require("mongoose");

const schema = new Schema({
    status_id: {
        type: String
    },
    estimation: {
        type: Number
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
    bed: {
        type: Number
    },
    floor: {
        type: Number
    },
    user_estimations: {
        type: Array
    }
});

module.exports = model("Room", schema);
