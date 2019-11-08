const axios = require("axios");
const router = require("express").Router();
const librarian = require("../../controller/Librarian");


router
    .route("/:terms")
    .get(librarian.getBooks);
router
    .route("/save")
    .post(librarian.saveBook);
router
    .route("/save/:id")
    .get(librarian.getSavedBooks);

module.exports = router;