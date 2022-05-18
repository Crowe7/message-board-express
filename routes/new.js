var express = require('express');
var router = express.Router();

/* GET new post form. */
router.get('/', function(req, res, next) {
    res.render('new');
});

module.exports = router;
