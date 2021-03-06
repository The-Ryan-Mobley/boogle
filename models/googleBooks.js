const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    authors :{
        type: String,
        trim: true,
        required: "need atleast 1 author"
    },
    summary :{
        type: String,
        trim: true
    },
    image :{
        type: String,
        trim: true
    },
    link :{
        type: String,
        trim: true,
        required: "Need a valid link"
    },
    title :{
        type: String,
        trim: true,
        required: "All books have a title"
    },
    bookId: {
        type: String,
        trim: true,
        required: "need bookId"

    },
    userId :{
        type: String,
        trim: true,
        required: "need associated user"
    }
});
const googleBooks = mongoose.model("googleBooks", bookSchema );
module.exports = googleBooks;