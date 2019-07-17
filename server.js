//add dependencies
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");

//initialize express app
var express = require("express");
var app = express();

// set up logger for development
app.use(logger("dev"));
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
//connect to public
app.use(express.static(process.cwd() + "/public"));


//set app engine
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"})
);
app.set("view-engine", "handlebars");

//set up mongoose database connection
mongoose.connect("mongodb: //localhost/scraper", { useNewUrlParser: true });
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected to Mongoose!");
});

//set up port
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("Listening on port " + port);
});

