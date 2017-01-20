var express = require('express');
var app = express();
var expressJwt = require('express-jwt');
var jsonwebtoken = require('jsonwebtoken');
var bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(express.static(__dirname+ '/public'));
app.use('/bower_components', express.static(__dirname+'/bower_components'));

app.use(expressJwt({secret: "shashidhar"}).unless({path: ['/', '/login', '/sigup']}));

app.get('/', function(req, res) {
	res.sendFile(__dirname+ '/index.html');
});

app.post('/signup', function(req, res) {
	var message = {
		status: "sigup ok",
		user : {
			username: req.body.username,
			role: "admin"
		}
	}
	return res.status(200).json({ success: true, message: message });
});

app.get('/profile', function(req, res) {
	var message = {
		status: "profile ok",
		user : {
			username: req.body.username,
			role: "admin"
		}
	}
	return res.status(200).json({ success: true, message: message });
});

app.post('/login', function(req, res) {
	if(req.body.username === "shashidhar" && req.body.password === "password"){
		var message = {
			status: "authentication ok",
			user : {
				username: req.body.username,
				role: "admin"
			}
		}

		var userData = {
			username: req.body.username
		}
		var token = jsonwebtoken.sign(userData, "shashidhar", {expiresIn: 60});
		message.token = token;
		
		return res.status(200).json({ success: true, message: message });
	}
	else {

		var message = {
			status: "authentication not ok",
			user : null,
			token: null
		}

		return res.status(400).json({ success: true, message: message });	
	}
});

app.use(function(err, req, res, next) {
	var message = {
		status: "internal server error.",
		error: err
	}
	return res.status(400).json({ success: true, message: message });
});

app.listen(8080, function() {
	console.log('server listening on 8080.');
})