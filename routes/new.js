var express = require('express');
var router = express.Router();
var messages = require('../public/javascripts/messages');
/* GET new post form. */
router.get('/', function(req, res, next) {
    res.render('form');
});

router.post('/', function(req, res, next) {
    const MessageContent = req.body;

    messages.push({user: MessageContent.user, text: MessageContent.message, added: new Date()});

    res.redirect('/');
})

module.exports = router;
