var express = require('express');
var app = express();
var log4js = require('log4js');
var logger = log4js.getLogger();
var http = require("http");

app.use(express.static(__dirname + '/public'));


app.listen(3001);
console.log('Server is running on port 3001');
