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
    // Fetch data from both endpoints concurrently
    Promise.all([
        fetch("http://localhost:9095/homepage", {
            method: 'GET',
        }).then(response => response.json()),
        fetch("http://localhost:9096/homepage", {
            method: 'GET',
        }).then(response => response.json())
    ])
    .then(([roomsListOnly4, eventsListOnly4]) => {
        // Combine the results and render with the EJS template
        res.render("index", {
            rooms: roomsListOnly4,
            events: eventsListOnly4
        });
    })
    .catch(error => {
        // Handle any errors from the fetch requests
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    });
});



app.get("/rooms", function(req, res) {
	// Invoke Product Management Microservice to get the products in the shop
	fetch("http://localhost:9095", {
		method: 'GET',
	})
	.then(response => response.json())
	.then(roomsList => {	
		// When the products have been retrieved, render them with the productsView EJS template
		res.render("rooms", {		
			rooms : roomsList
		});	
	});		
});

app.get("/events", function(req, res) {
	// Invoke Product Management Microservice to get the products in the shop
	fetch("http://localhost:9096", {
		method: 'GET',
	})
	.then(response => response.json())
	.then(eventsList => {	
		// When the products have been retrieved, render them with the productsView EJS template
		res.render("events", {		
			events : eventsList
		});	
	});		
});


app.get("/impressions", function(req, res) {
	// Invoke Product Management Microservice to get the products in the shop
	fetch("http://localhost:9097", {
		method: 'GET',
	})
	.then(response => response.json())
	.then(impressionList => {	
		// When the products have been retrieved, render them with the productsView EJS template
		res.render("impressions", {		
			impressions : impressionList
		});	
	});		
});



app.get("/weather", function(req, res) {
	// Invoke Product Management Microservice to get the products in the shop
	fetch("http://localhost:9098", {
		method: 'GET',
	})
	.then(response => response.json())
	.then(weatherList => {	
		// When the products have been retrieved, render them with the productsView EJS template
		res.render("weather", {		
			weathers : weatherList
		});	
	});		
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})