var path = require('path');
var express = require('express');
var app = express();
	app.use(express.static(__dirname + "/public"));

require('./routing')(app, path, express);
	app.listen(9000, function(){
	  console.log('connected on 9000')
	})
