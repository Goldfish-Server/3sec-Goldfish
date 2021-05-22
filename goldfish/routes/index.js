var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.use('/group', require('./group'))
//router.use('/post', require('./post'))
router.use('/question', require('./question'))


module.exports = router;
