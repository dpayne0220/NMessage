var express = require('express');
var router = express.Router();

router.get('*', function(req, res, next) {
  Message.find(function(err, messages) {
    if (err) {
      return res.send(err);
    }
 
    res.sendfile('./public/index.html');
  });
});

module.exports = router;
