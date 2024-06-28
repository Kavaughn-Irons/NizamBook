
var connection = require("./connection");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection


    var createProfile = function(req,res){

    let theImage = req.body.Image
    let theName = req.body.Name
    let theEmail = req.body.Email
    let thePhoneNumber = req.body.phoneNumber
    let theLocation = req.body.LocationAddress

    console.log(theLocation);


    connection.query("INSERT INTO Profiles (Image, theName, Email, phoneNumber, Location) VALUES (?,?,?,?,?)", [theImage,theName,theEmail,thePhoneNumber,theLocation], function(err, result) {
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


module.exports = createProfile;
