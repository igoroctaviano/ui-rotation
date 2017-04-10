var express = require('express');
var app = express();

app.get('/products', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

	let products = [
		{price: '$49.99', name: 'Football'},
		{price: '$9.99', name: 'Baseball'},
		{price: '$29.99', name: 'Basketball'},
		{price: '$99.99', name: 'iPod Touch'},
		{price: '$399.99', name: 'iPhone 5'},
		{price: '$199.99', name: 'Nexus 7'}
	];

	res.send(products);
});

app.listen(4000, () => {
	console.log('Presentation example app listening on port 4000!');
});