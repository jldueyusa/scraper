// //add dependencies
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");
var request = require("request");
var cheerio = require("cheerio");

var Comment = require("./models/Comment.js");
var Article = require("./models/Article.js");

// //initialize express app
// var express = require("express");
// var app = express();

// // set up logger for development
// app.use(logger("dev"));
// app.use(
//     bodyParser.urlencoded({
//         extended: false
//     })
// );
// //connect to public
// app.use(express.static(process.cwd() + "/public"));


// //set app engine
// var exphbs = require("express-handlebars");
// app.engine("handlebars", exphbs({defaultLayout: "main"})
// );
// app.set("view-engine", "handlebars");

// //set up mongoose database connection
// MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scraper";
// mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
// //mongoose.connect("mongodb://localhost/scraper", { useNewUrlParser: true });
// var db = mongoose.connection;

// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//     console.log("Connected to Mongoose!");
// });

// require("./controller/controller.js")(app);
// app.get("/", function(req, res){
//     console.log("hi");
//     res.render("index")
// })
// //set up port
// var port = process.env.PORT || 3000;
// app.listen(port, function() {
//     console.log("Listening on port " + port);
// });

var express = require("express");

var app = express();
//var port = 3000;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//set up mongoose database connection
MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scraper";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
//mongoose.connect("mongodb://localhost/scraper", { useNewUrlParser: true });
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected to Mongoose!");
});

require("./controller/controller.js")(app);
app.get("/", function(req, res){
    console.log("hi");
    res.render("index")
});
app.get("/scrape", function(req, res) {
    request("http://www.theverge.com", function(error, response, html) {
      var $ = cheerio.load(html);
      var titlesArray = [];
  
      $(".c-entry-box--compact__title").each(function(i, element) {
        var result = {};
  
        result.title = $(this)
          .children("a")
          .text();
        result.link = $(this)
          .children("a")
          .attr("href");
  
        if (result.title !== "" && result.link !== "") {
          if (titlesArray.indexOf(result.title) == -1) {
            titlesArray.push(result.title);
  
            Article.count({ title: result.title }, function(err, test) {
              if (test === 0) {
                var entry = new Article(result);
  
                entry.save(function(err, doc) {
                  if (err) {
                    console.log(err);
                  } else {
                    console.log(doc);
                  }
                });
              }
            });
          } else {
            console.log("Article already exists.");
          }
        } else {
          console.log("Not saved to DB, missing data");
        }
      });
      res.redirect("/");
    });
  });
//set up port
var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Listening on port " + port);
});
// var animals = [
//   {
//     animalType: "dog",
//     pet: true,
//     fierceness: 4
//   }, {
//     animalType: "cat",
//     pet: true,
//     fierceness: 10
//   }, {
//     animalType: "giraffe",
//     pet: false,
//     fierceness: 4
//   }, {
//     animalType: "zebra",
//     pet: false,
//     fierceness: 8
//   }, {
//     animalType: "lion",
//     pet: false,
//     fierceness: 10
//   }
// ];



app.get("/all-pets", function(req, res) {
  // Handlebars requires an object to be sent to the index handlebars file.

  // 2. Loop through the animals, and send those that are pets to the index handlebars file.
  var data = {
    anims: []
  };

  for (var i = 0; i < animals.length; i += 1) {
    // Get the current animal.
    var currentAnimal = animals[i];

    // Check if this animal is a pet.
    if (currentAnimal.pet) {
      // If so, push it into our data.anims array.
      data.anims.push(currentAnimal);
    }
  }

  res.render("index", data);
});

app.get("/all-non-pets", function(req, res) {
  // Handlebars requires an object to be sent to the index handlebars file.

  // 3. Loop through the animals, and send those that are not pets to the index handlebars file.
  var data = {
    anims: []
  };

  for (var i = 0; i < animals.length; i += 1) {
    // Get the current animal.
    var currentAnimal = animals[i];

    // Check if this animal is a pet.
    if (!currentAnimal.pet) {
      // If not, push it into our data.anims array.
      data.anims.push(currentAnimal);
    }
  }

  res.render("index", data);
});

//app.listen(port);
