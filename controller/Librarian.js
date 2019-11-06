const db = require("../models");
const axios = require("axios")
module.exports = {
    getBooks: (req,res)=> {
        console.log(req.params.terms)
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.terms.toString()}&key=${process.env.GOOGLE_KEY}`)
        .then((result)=>{
            res.json(result.data.items);
            
        });
    },
    saveBook: (req,res)=>{
        console.table(req.body)
        db.googleBooks.create(req.body).then((result)=>{
            console.log("success");
            res.json(result);
        });
    },
    getSavedBooks: (req, res)=>{
        db.googleBooks.find({userId: req.params.id}).then(result => {
            res.json(result);
        });
    }

    
}