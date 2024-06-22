const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 9096;


// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  port: 3310,
  user: 'test', // your MySQL username
  password: 'testpassword', // your MySQL password
  database: 'events',
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
  const query = 'SELECT * FROM rooms';
  db.query(query, (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results)
    res.send(results);
  });
});

// Rote to only the top 4 entrys per Room
app.get('/homepage', (req, res) => {
  const query = 'SELECT * FROM rooms order by id asc limit 4';
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
