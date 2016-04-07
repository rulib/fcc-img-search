var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/api/imagesearch/:search', function(req, res, next) {
  //middleware to log :search to mongodb
  //middleware to load images from API using 'request'
  //middleware to serve up images n*10 thru (n+1)*10
  console.log("Logging params: " + req.params.search);
  console.log("Logging query offset: " + req.query.offset);
  res.render('index', { title: 'Express' });
  
});
module.exports = router;
