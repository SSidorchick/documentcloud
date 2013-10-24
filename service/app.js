
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    http = require('http');

var allowCrossDomain = function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
};

var app = express();

// all environments
app.set('port', process.env.PORT || 3001);
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(allowCrossDomain);
app.use(app.router);


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/documents', routes.documents.all);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
