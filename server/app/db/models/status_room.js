const { Schema, model } = require("mongoose");

const schema = new Schema({
    status_id: {
        type: String
    },
    bed: {
        type: Number
    },
    wifi: {
        type: String
    },
    tv: {
        type: String
    },
    hair_dryer: {
        type: Number
    },
    conditioner: {
        type: Number
    },
    bar: {
        type: Number
    },
});

module.exports = model("StatusRoom", schema);
