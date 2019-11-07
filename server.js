require('dotenv').config()
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 1337;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || 
  "mongodb://heroku_l8kbbg0s:gtblbfeb6eprc1k9pev5fcnunt@ds241268.mlab.com:41268/heroku_l8kbbg0s");

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client", "build"));
  });
  
app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});