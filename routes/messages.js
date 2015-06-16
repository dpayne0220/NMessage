var Message = require('../models/message');
var express = require('express');
var router = express.Router();

router.route('/message')
  .get(function(req, res, next) {
      Message.find(function(err, messages) {
        if (err) {
          return res.send(err);
      }
 
      res.json(messages);
    });
  })
  .post(function(req, res, next) {
    var message = new Message(req.body);
   
        message.save(function(err) {
          if (err) {
            return res.send(err);
          }
   
        res.send({ message: 'Message Sent' });
      });
    });

router.route('/message/:id')
  .delete(function(req, res) {
    Message.remove({
          _id: req.params.id
        }, function(err) {
          if (err) 
            res.send(err);
          

      res.send({ message: 'Message Deleted' });
    });
  });

module.exports = router;
