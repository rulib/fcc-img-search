var express = require('express');
var router = express.Router();


var imgSearch = require('../my_node_modules/imgSearch.js');


router.get('/', function(req, res, next) {
  res.sendFile('/home/ubuntu/workspace/img-search/views/imgur.html');
});

router.get('/api/imagesearch/:search'
  ,imgSearch.imgLoad
  ,imgSearch.searchProcess);
  
router.get('/api/recent/'
  ,imgSearch.recentSearches);

module.exports = router;
