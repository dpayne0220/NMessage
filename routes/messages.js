var Message = require('../models/message');
var express = require('express');
var router = express.Router();

router.get('/message', function(req, res, next) {
  Message.find(function(err, messages) {
    if (err) {
      return res.send(err);
    }
 
    res.json(messages);
  });
});

router.post('/message', function(req, res, next) {
  var message = new Message(req.body);
 
  message.save(function(err) {
    if (err) {
      return res.send(err);
    }
 
    res.send({ message: 'Message Sent' });
  });
});

module.exports = router;
