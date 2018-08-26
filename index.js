var express = require('express')
var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

server.listen(port, function () {
  console.log('listening on *:' + port);

})
