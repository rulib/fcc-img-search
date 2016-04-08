var express = require('express');
var router = express.Router();

var imgur = require('../private/secret.js');
var imgSearch = require('../my_node_modules/imgSearch.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/api/imagesearch/:search'
  ,imgSearch.imgLoad
  , function(req, res, next) {
  //middleware to log :search to mongodb
  //middleware to load images from API using 'request'
  //middleware to serve up images n*10 thru (n+1)*10
  console.log("Logging params: " + req.params.search);
  console.log("Logging query offset: " + req.query.offset);
  console.log("Logging client ID: "+imgur.clientId);
  res.render('index', { title: 'Express' });
  
});
module.exports = router;
