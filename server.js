var express    = require('express');
var path       = require('path');
var bodyParser = require('body-parser');
var log4js     = require('log4js');
var exphbs     = require('express-handlebars');
var mongoose   = require('mongoose');
var _          = require('underscore');
var config     = require('config');

var router     = require('./routes/router');
var schemas    = require('./schemas');
var logger     = require('./utils/logger');

var port       = process.env.PORT || 3000;
var dbUrl      = process.env.MONGO_URI || 'mongodb://localhost/example';
var dbOptions  = { server: { socketOptions: { keepAlive: 1 } } };

// Connect to mongodb
var connect = function () {
  mongoose.connect(dbUrl, dbOptions);
};
connect();

mongoose.connection.on('error', console.error);
mongoose.connection.on('disconnected', connect);

// App
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(log4js.connectLogger(logger, { level: log4js.levels.INFO, format: ':method :url :status' }));
app.use(express.static('public'));

// View engine handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routers
app.use('/', router);

var server = app.listen(port, function() {
  console.log('Listening on port %d', server.address().port);
});

module.exports = app;
