var express = require('express');
var app = express();
var port = 3000;
var primes = require('./primes.js');

app.get('/', function(req, res){
    res.status(200).send('Testing and Debugging Sample');
})

app.get('/isPrime/:number', function(req, res){
    res.status(200).send(primes.isPrime(req.params.number));    
})

var server = app.listen(port, function(){
  console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});

exports.stop = function(){
    server.close();
}