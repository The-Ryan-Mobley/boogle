const axios = require("axios");
const router = require("express").Router();
const authorizer = require("../controller/authorizer");
const librarian = require("../controller/Librarian");
router.get("/books/:terms", (req, res) =>{
    

});
router.post("/api/user/new", (req, res) =>{
    authorizer.addUser(req.body.userName, req.body.password, result =>{
        if(result === "504"){
            res.sendStatus("504");
        } else{
            res.json(result);
        }
    });

});
router.get("/api/user/login", (req,res) =>{

})
//https://www.googleapis.com/books/v1/volumes?q=
module.exports = router;