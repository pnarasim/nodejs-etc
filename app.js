/**
 * Module dependencies.
 */

var express = require('express');
var bodyParser = require("body-parser");
var routes = require('./routes');

var http = require('http');
var path = require('path');
var models = require("./models");
var app = express();

// all environments
app.set('port', process.env.PORT || 3100);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/setup', routes.dosetup);
app.post('/markaggs', routes.domarkaggs);
app.post('/advertisers', routes.gettimeseen);
app.post('/aggregators', routes.getaggregators);
app.post('/mapit', routes.mapit);

var about = require('./routes/about');
app.get('/about', about.about);

console.log("here");
models.sequelize.sync().then(function() {
    http.createServer(app).listen(app.get('port'), function() {
        console.log('Express server listening on port ' + app.get('port'));
    });
});
