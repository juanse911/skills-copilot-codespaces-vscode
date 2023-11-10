// Create web server
// Run: node comments.js
// Visit in browser at http://localhost:8080

var express = require('express');
var app = express();

app.get('/comments', function(req, res) {
	res.send('This is a test');
});

app.listen(8080);
console.log('Server running at http://localhost:8080/');