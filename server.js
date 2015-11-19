var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var md5 = require('md5')

var cookieParser = require('cookie-parser')

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static('public'));

app.use(cookieParser())

app.listen(3000);

var mongoUri =  process.env.MONGOLAB_URI || 'mongodb://localhost/family-tree';
moongoose.connect(mongoUri);

app.get('/', function( req, res ){
  res.send( "bannnaaaannnnaaaa");
});
