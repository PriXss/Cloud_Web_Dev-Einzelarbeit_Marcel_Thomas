const http = require("http");
const express = require("express");
const app = express();
const mysql = require("mysql2");
var bodyParser  = require('body-parser');

const port = 7766;

// DB credentials
var con = mysql.createConnection({
    host: 'localhost',
    port: 3310,
    user: 'test',
    password: 'testpassword',
    database: 'orders'
});

// connect servic to DB
con.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      return;
    }
    console.log('Connected to MySQL database');
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// user selects date and fills in name and address
app.post("/", function (req,res){
    const {input1, input2, roomId} = req.body;
    console.log("This is the variables"+input1, input2, roomId)
    const sqlQuery = "INSERT INTO orders (input1, input2, roomId) VALUES (?, ?, ?)";
    
    con.query(sqlQuery, [input1, input2, roomId], function(error, result) {
        if (error) {
            console.error('Error when inserting the row into the table:', error);
            res.status(500).json({ error: 'Internal server error' });
            return;
          }
          
          console.log('Row successfully inserted into the table');
          res.status(200).json({ message: 'Your Order was placed.' });
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})