var express = require('express');
var mysql = require('mysql');

var app = express();
var PORT = process.env.PORT || 3000;

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'seinfeld'
});

connection.connect(function(err){
	if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

app.get('/', function (req, result) {
	connection.query('SELECT * FROM actors', function(err,res){
		if (err) throw err;
		var html = "";
		for (var i = 0; i < res.length; i++) {
			html += res[i] + "<br>";
		}
		result.send(html);
	});
});

app.get('/name', function (req, result) {
	connection.query('SELECT * FROM actors', function(err,res){
		if (err) throw err;
		var html = "";
		for (var i = 0; i < res.length; i++) {
			html += res[i].name + "<br>";
		}
		result.send(html);
	});
});

app.get('/attitude', function (req, result) {
	connection.query('SELECT * FROM actors', function(err,res){
		if (err) throw err;
		var html = "";
		for (var i = 0; i < res.length; i++) {
			html += res[i].attitude + "<br>";
		}
		result.send(html);
	});
});

app.get('/coolness', function (req, result) {
	connection.query('SELECT * FROM actors', function(err,res){
		if (err) throw err;
		var html = "";
		for (var i = 0; i < res.length; i++) {
			html += res[i].coolness_points + "<br>";
		}
		result.send(html);
	});
});

app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
});