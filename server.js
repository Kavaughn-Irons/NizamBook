const express = require("express");
let test = require("multiline");
const routes = require("./controllers/burgerController.js");
const app = express();
const browserify = require("browserify");


// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(browserify);

const exphbs = require("express-handlebars");

//app.engine("handlebars", exphbs({ defaultLayout: "main" }));
//app.set("view engine", "handlebars");

// Use Handlebars to render the main index.html page with the plans in it.
app.use(routes);
// Start our server so that it can begin listening to client requests.
app.listen(5000, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + 5000);
});
