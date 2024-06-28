const mysql = require("mysql");
console.log("boom!");
const connection = mysql.createConnection({host: 'localhost',
port: "3306",
user: 'root',
database: "Nizam",
password: "root"
});

connection.connect(function(err) {
      if (err) {
        console.error("error connecting: " + err.stack);
        return err;
    }else{

    }
});

module.exports = connection;
