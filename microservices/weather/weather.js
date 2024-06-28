const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 9098;



// Route for product page
app.get('/', (req, res) => {
  fetch("http://api.weatherapi.com/v1/current.json?key=575c8279b823438a85e115318242606&q=Stuttgart", {
    method: 'GET',
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the JSON data from the response
  })
  .then(data => res.send(data)) // Send the parsed data in the response
  .catch(error => {
    console.error('Fetch error:', error);
    res.status(500).send('Error fetching data');
  });
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
