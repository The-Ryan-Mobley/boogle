const axios = require("axios");
const router = require("express").Router();
const authorizer = require("../controller/authorizer");
const librarian = require("../controller/Librarian");
router.get("/books/:terms", (req, res) =>{
    

});
router.get("/user/new", (req, res))
//https://www.googleapis.com/books/v1/volumes?q=
module.exports = router;