//import express
var express = require("express");

//create the server
var app = express();

//Link the Client Location (Read_StaticData) to the Server (app)
app.use(express.static(__dirname+"/../Task"));

//Default Output
app.get("/",function (req,res) {
   res.redirect("/index.html");
});

//import the fs module
var fs = require("fs");

//Create the Rest API ("http://localhost:8080/readStatic")
app.get("/Task",function (req,res){
    fs.readFile(__dirname+"/employee.json",function (err,data) {
        res.send(data.toString());
    });
}) ;


//Assign the Port No.
app.listen(8080);
console.log("Server Listening the Port No.8080");




