const { Schema, model } = require("mongoose");

const schema = new Schema({
    user_name: {
        type: String
    },
    message: {
        type: String
    },
    date: {
        type: String
    },
});

module.exports = model("Comment", schema);
