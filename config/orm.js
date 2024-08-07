
var connection = require("./connection");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
let run = async function(){

let orm = new Promise((reject, resolve) => {

connection.query("SELECT * FROM profiles", function(err, data) {
  if (err) {
    //return res.status(500).end();
  }
  //res.render("index",{theProfiles: data});   
    reject(data)

  });


})

return orm;

}


/*
function notDevoured(data) {
    
    var notDevouredObjects = new Array(0);
    
    for(var i = 0; i < data.length; i++){
        if(data[i].devoured === 0){
         notDevouredObjects.push(data[i]);
        }  
    }
    
    return notDevouredObjects;
   
}

var orm = {


sendData: function(res){

connection.query("SELECT * FROM burgers", function(err, data) {
if (err) {
  return res.status(500).end();
}
res.render("index", {notDevoured: notDevoured(data),Devoured: Devoured(data) });
});

},    
 
createBurger: function(req,res){
 

connection.query("INSERT INTO burgers (burger) VALUES (?)", [req.body.plan], function(err, result) {
if (err) {
    console.log(err);
    return res.status(500).end();
}

// Send back the ID of the new plan
res.json({ id: result.insertId });
//console.log({ id: result.insertId });
});    

},


deleteBurger: function(req,res){

connection.query("UPDATE burgers SET devoured = true WHERE id = ?", [req.params.id], function(err, result) {
if (err) {
  // If an error occurred, send a generic server failure
    console.log("HERE - DELETE!!!");
    return res.status(500).end();
}
else if (result.affectedRows === 0) {
  // If no rows were changed, then the ID must not exist, so 404
  return res.status(404).end();
}
res.status(200).end();

});
    
}
    
    
}; 
 */ 

module.exports = run;