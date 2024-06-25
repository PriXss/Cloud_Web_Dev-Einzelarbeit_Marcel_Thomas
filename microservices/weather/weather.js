const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 9098;

apiUrl = "api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=3461608697e713c9347f7ba970120eeb";


// Route for product page
app.get('/', (req, res) => {

  fetch(apiUrl, (err,results)=> {
    console.log(results)
    res.send(results)
  })
});

// Rote to only the top 4 entrys per Room
app.get('/homepage', (req, res) => {
  const query = 'SELECT * FROM events order by id asc limit 4';
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
