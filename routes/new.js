var express = require('express');
var router = express.Router();

/* GET new post form. */
router.get('/', function(req, res, next) {
    res.render('form');
});

module.exports = router;
