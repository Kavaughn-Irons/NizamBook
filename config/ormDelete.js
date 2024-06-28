
var connection = require("./connection");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection


    var deleteProfile = function(req,res){

    let profileID = req.body.theID;
  


    connection.query("delete from profiles where profile_id = ?", [profileID], function(err, result) {
    if (err) {
        console.log(err);
        return res.status(500).end();
    }
    

    console.log("WORKS GOOD!")
    // Send back the ID of the new plan
    //res.json({ id: result.insertId });
    //console.log({ id: result.insertId });
    });    
    
}


module.exports = deleteProfile;
