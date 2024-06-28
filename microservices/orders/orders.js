const http = require("http");
const express = require("express");
const app = express();
const mysql = require("mysql2");

const port = 9777;

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

// user selects date and fills in name and address
app.post("/", function (req,res){
    let order = req.body;
    console.log(JSON.stringify(order))
    const sqlQuery = "INSERT INTO orders (roomId, input1, input2) VALUES (?, ?, ?)";
    
    
    con.query(sqlQuery, [order.roomId, order.input1, order.input2], function(error, result) {
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