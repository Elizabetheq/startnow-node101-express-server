// import files and packages up here
var express = require("express");
var morgan = require("morgan");
var json = require("./data.json");

// create your express server below
var app = express();

// add your routes and middleware below
app.use(morgan("dev"));

app.get('/', function(req, res){
  res.status(200).send("hello");
});
app.get("/data", function(req,res){
  res.send(json);
  });
// finally export the express application
module.exports = app;
// index.js in server folder


// make a request to the server for the json data

// display data on page using html
