var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')


var app = express()
var messages = []


// Use Jade Templates
app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'views'))


// Parse form data
app.use(bodyParser.urlencoded({ extended: true}))


// Show chat messages list and form
app.get('/', function (req, res) {
	var data = {
        pageTitle: 'Chätt',
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


// Start server
app.listen(process.env.PORT, process.env.IP, function() {
	console.log('Server started at ' + process.env.IP + ':' + process.env.PORT)
})
