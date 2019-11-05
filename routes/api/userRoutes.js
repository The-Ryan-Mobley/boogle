const axios = require("axios");
const router = require("express").Router();
const authorizer = require("../../controller/authorizer");


router.route("/new").post(authorizer.addUser);
router.route("/login").get(authorizer.loginUser);
   

//https://www.googleapis.com/books/v1/volumes?q=
module.exports = router;