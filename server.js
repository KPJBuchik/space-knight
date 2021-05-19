
const bodyParser = require('body-parser');
require('dotenv').config()
var express = require("express");

process.on('uncaughtException', function (err) {
    console.error(err);
    console.log("Node NOT Exiting...");
});

var app = express();
var PORT = process.env.PORT || 8081;


app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));




app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);

});