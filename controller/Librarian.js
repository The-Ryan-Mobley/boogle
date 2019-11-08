const db = require("../models");
const axios = require("axios")
module.exports = {
    getBooks: (req,res)=> {
        console.log(req.params.terms);
        console.log("********************************************************");
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.terms.toString()}&key=${process.env.GOOGLE_KEY}`)
        .then((result)=>{
            res.json(result.data.items);
            
        }).catch(er => console.log(er));
    },
    saveBook: (req,res)=>{
        db.googleBooks.create(req.body).then((result)=>{
            res.json(result);
        });
    },
    getSavedBooks: (req, res)=>{
        db.googleBooks.find({userId: req.params.id}).then(result => {
            res.json(result);
        });
    }

    
}