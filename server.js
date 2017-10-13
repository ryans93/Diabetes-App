const express = require("express");
const request = require("request");
const mongoose = require('mongoose');
var path = require("path");
var bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

const User = require("./models/User.js");

mongoose.Promise = Promise;

mongoose.connect("mongodb://heroku_dgc16104:tqpebu7n54m6h8rvisfafljssb@ds119565.mlab.com:19565/heroku_dgc16104" || "mongodb://localhost/DiabetesDB");

const db = mongoose.connection;

db.on("error", function (error) {
    console.log("Mongoose Error: ", error);
});

db.once("open", function () {
    console.log("Mongoose connection successful.");
});


//api routes here

app.post("/api/newUser", function (req, res) {
    
    let newUser = new User(req.body);
    console.log(newUser);
    newUser.save(function (err, doc) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(doc);
        }
        res.send(doc);
    });
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, function () {
    console.log("App running on port " + PORT);
});