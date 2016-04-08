var express = require('express');
var path = require('path');

var mongo = require('mongodb').MongoClient;
var mongoUrl = 'mongodb://localhost:27017/searches';

var routes = require('./routes/index');

var app = express();
var database = {};


mongo.connect(mongoUrl, function(err,db) {
    if(err) {
        throw new Error('Database failed to connect!');
    } else {
      database = db;
        console.log('MongoDB successfully connected.');
    }});
    
var dbExpose = function(req,res,next){
  req.db = database;
  next();
};    
    

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

app.use(dbExpose);
app.use('/', routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});



app.listen(8080);


module.exports = app;

