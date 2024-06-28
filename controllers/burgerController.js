const ormCreate = require("../config/ormCreate");
const ormDelete = require("../config/ormDelete");
const express = require("express");
const path = require("path");
const orm = require("../config/orm");

var routeNumGlob = 0;

router = express.Router();

router.get("/", function(req, res) {

  res.sendFile(path.join(__dirname, "../views/index2.html"));

    
});

router.get("/nizambunny2007", function(req, res) {

  res.sendFile(path.join(__dirname, "../views/index3.html"));



});


orm().then(function(data) { 



router.get("/data"+routeNumGlob, function(req,res){

  console.log(data);
  res.send(data);
})

});

router.get("/css", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/assets/burger_style.css"));
});

router.get("/burger-image", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/assets/burger.png"));
});

router.get("/getData", function(req, res) {
  res.sendFile(path.join(__dirname, "../Javascript/getData.js"));
});

router.get("/getData2", function(req, res) {
  res.sendFile(path.join(__dirname, "../Javascript/getDataConnect.js"));
});

router.get("/background", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/assets/mountain.jpg"));
});
router.get("/multiline", function(req, res) {
  res.sendFile(path.join(__dirname, "../node_modules/multiline/index.js"));
});



router.post("/globNum",function(req,res){

res.send({glob: routeNumGlob});

});

// Create a new plan
router.post("/create", function(req, res) {
//    
 routeNumGlob++;


ormCreate(req,res);

orm().then(function(data) {

  router.get("/data"+routeNumGlob,function(req2, res2){
    res2.send(data);
  });


});




})



router.post("/delete", function(req, res) {
  //    
   routeNumGlob++;
  
  
  ormDelete(req,res);
  
  orm().then(function(data) {
  
    router.get("/data"+routeNumGlob,function(req2, res2){
      res2.send(data);
    });
  
  
  });
  
  
  
  
  })

// Delete a plan
//router.delete("/api/burgers/:id", function(req, res) {

//orm.deleteBurger(req,res);    
    
//});

module.exports = router;