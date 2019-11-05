const router = require("express").Router();
const userRoutes = require("./userRoutes");


router.use("/user", bookRoutes);

module.exports = router;
