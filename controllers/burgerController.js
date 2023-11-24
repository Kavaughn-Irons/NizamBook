const express = require("express");
const path = require("path");
const orm = require("../config/orm");

router = express.Router();

router.get("/", function(req, res) {

  res.sendFile(path.join(__dirname, "../views/index2.html"));
//orm.sendData(res);
    
});

router.get("/nizambunny2007", function(req, res) {
  res.sendFile(path.join(__dirname, "../views/index3.html"));
});

router.get("/css", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/assets/burger_style.css"));
});

router.get("/burger-image", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/assets/burger.png"));
});

router.get("/getData", function(req, res) {
  res.sendFile(path.join(__dirname, "../Javascript/getDataConnect.js"));
});

router.get("/getData2", function(req, res) {
  res.sendFile(path.join(__dirname, "../Javascript/getData.js"));
});

router.get("/background", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/assets/mountain.jpg"));
});
router.get("/multiline", function(req, res) {
  res.sendFile(path.join(__dirname, "../node_modules/multiline/index.js"));
});
// Create a new plan
//router.post("/api/burgers", function(req, res) {

//    orm.createBurger(req,res);

///});

// Delete a plan
//router.delete("/api/burgers/:id", function(req, res) {

//orm.deleteBurger(req,res);    
    
//});

module.exports = router;