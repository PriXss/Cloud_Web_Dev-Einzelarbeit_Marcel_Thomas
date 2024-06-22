const express = require('express')
const {setupLogging} = require("./logging/logging");



const app = express()
const port = 2500;
setupLogging(app);

app.set("view engine", "ejs");
app.use(express.static("public"));

// Set the main layout
app.set("views", "public/views")



app.get('/', (req, res) => {
	
	// Invoke Product Management Microservice to get the products in the shop
	fetch("http://localhost:9095/homepage", {
		method: 'GET',
	})
	.then(response => response.json())
	.then(roomsListOnly4 => {	
		// When the products have been retrieved, render them with the productsView EJS template
		res.render("index", {		
			rooms : roomsListOnly4,
		});	
	});		
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})