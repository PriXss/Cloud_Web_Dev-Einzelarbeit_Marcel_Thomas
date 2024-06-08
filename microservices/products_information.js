const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 9095;



// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'test', // your MySQL username
  password: 'testpassword', // your MySQL password
  database: 'productinformation'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

// Route for product page
app.get('/', (req, res) => {
  const query = 'SELECT * FROM products';
  db.query(query, (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results)
    res.send(results);
  });
});


app.get('/homepage', (req, res) => {
  const query = 'SELECT * FROM products order by id asc limit 4';
  db.query(query, (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results)
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
