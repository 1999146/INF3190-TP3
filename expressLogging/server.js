var fs = require('fs')
var path = require('path')
var express = require('express')
var finalhandler = require('finalhandler')
var http = require('http')
var morgan = require('morgan')

// create "middleware"
var logger = morgan('combined')
var app = express()

//ecriture des logs
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(morgan('tiny', { stream: accessLogStream }))


//reponses placeholder donnees a l'application
app.get('/', function (req, res) {
	res.send('le call au logger a fonctionne');
})
app.get('/*', function (req, res) {
	res.send('le call a /* a fonctionne');
})
app.listen(3000);

