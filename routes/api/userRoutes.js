const axios = require("axios");
const router = require("express").Router();
const authorizer = require("../../controller/authorizer");


router.route("/new").post(authorizer.addUser);
router.route("/login").get(authorizer.loginUser);
   


module.exports = router;