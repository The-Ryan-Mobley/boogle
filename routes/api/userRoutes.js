const axios = require("axios");
const router = require("express").Router();
const authorizer = require("../../controller/authorizer");
const librarian = require("../../controller/Librarian");

router.route("/api/user") //need to conver function vars
    .get(authorizer.addUser)
    .post(authorizer.loginUser);

//https://www.googleapis.com/books/v1/volumes?q=
module.exports = router;