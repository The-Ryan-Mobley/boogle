const db = require("../models");
const axios = require("axios")
module.exports = {
    getBooks: (req,res)=> {
        console.log(req.params.terms)
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.terms.toString()}&key=${process.env.GOOGLE_KEY}`)
        .then((result)=>{
            console.log(result.data.items);
            res.json(result.data.items);
            
        })

        console.log('this is a placeholder')

    }
    
}