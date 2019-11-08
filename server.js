require('dotenv').config()
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 1337;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.get('*',(req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 
  "mongodb://localhost/boogle");

// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "./client", "build"));
//   });
  
app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});