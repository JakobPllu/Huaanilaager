var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')


var app = express()
var messages = []


// Use Jade Templates
app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'views'))


// Parse pasted from data
app.use(bodyParser.urlencoded({ extended: true}))


// Show chat messages list and form
app.get('/', function (req, res) {
	var data = {
		messages: messages,
	}
	res.render('index', data)
})


 // Add posted messages to messages list
app.post('/', function (req, res)  {
	var message = {
		date: new Date(),
		author: req.body.author,
		message: req.body.message
	}
	messages.push(message)

	res.redirect('/')
})


// Start server to listen port 4000
app.listen(4000, function() {
	console.log('Server started at port 4000')
})
