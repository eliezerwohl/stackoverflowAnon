var path = require('path');
var express = require('express');
var app = express();
require('./routing')(app, path, express);
