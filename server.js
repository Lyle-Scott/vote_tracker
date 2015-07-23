'use strict'

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/secret', function(request, response) {
  response.status(200).send('<h1>This is a secret place. Do not touch anything here</h1>')
});

app.get('/*', function(req, res) {
  res.status(404).send('404: There is no page here')
});

app.listen(process.env.PORT || 5000, function() {
  console.log('Server is running on port 5000');
});


