const axios = require("axios");
const router = require("express").Router();
const librarian = require("../../controller/librarian");


router.route("/:terms").get(librarian.getBooks);

   

//https://www.googleapis.com/books/v1/volumes?q=
module.exports = router;