const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    userName :{
        type: String,
        trim: true,
        unique: true,
        required: "need a unique username"
    },
    password :{
        type: String,
        trim: true,
        required: "need a password"
    },
    salt :{
        type: String,
        trim: true,
        required: "need a password salt"
    }
});

let Users = mongoose.model("users", userSchema );
module.exports = Users;