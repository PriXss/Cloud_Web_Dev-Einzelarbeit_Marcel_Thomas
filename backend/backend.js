const express = require('express')
const {setupLogging} = require("./logging/logging");
const httpProxy = require('express-http-proxy')



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
	.then(productsListOnly4 => {	
		// When the products have been retrieved, render them with the productsView EJS template
		res.render("index", {		
			products : productsListOnly4
		});	
	});		
});

// Backend directing to the Merch Microservice
app.get("/merch", function(req, res) {
	// Invoke Product Management Microservice to get the products in the shop
	fetch("http://localhost:9097/", {
		method: 'GET',
	})
	.then(response => response.json())
	.then(merchList => {	
		// When the products have been retrieved, render them with the productsView EJS template
		res.render("shop", {		
			products : merchList
		});	
	});		
});


app.get("/cart", function(req, res) {
	// Invoke Product Management Microservice to get the products in the shop
	fetch("http://localhost:9092/", {
		method: 'GET',
	})
	.then(response => response.json())
	.then(shoppingCartList => {	
		// When the products have been retrieved, render them with the productsView EJS template
		res.render("cart", {		
			products : shoppingCartList
		});	
	});		
});

app.use('/shoppingCart', httpProxy("http://localhost:9092"));


// Backend directing to the Merch Microservice
app.get("/modelle", function(req, res) {
	
	// Invoke Product Management Microservice to get the products in the shop
	fetch("http://localhost:9095/", {
		method: 'GET',
	})
	.then(response => response.json())
	.then(productsList => {	
		// When the products have been retrieved, render them with the productsView EJS template
		res.render("modelle", {		
			products : productsList
		});	
	});		
});


app.get('/sucarex', (req, res) => {
	
	// Invoke Product Management Microservice to get the products in the shop
	fetch("http://localhost:3333/", {
		method: 'GET',
	})
	.then(response => response.json())
	.then(coordinatesList => {	
		// When the products have been retrieved, render them with the productsView EJS template
		res.render("sucarex", {		
			coordinates : coordinatesList
		});	
	});		
});





app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})