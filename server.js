// simple express server for reveal js
var express = require('express');
var routes = require('./routes.js');

var server = express();
routes(server);

server.use(express.static('assets'));

var port = 8080;

server.listen(port, function () {
  console.log('Server listening at localhost: ', port);
});