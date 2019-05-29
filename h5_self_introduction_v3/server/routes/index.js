var express = require('express');
var db = require('../db');
var config = require('../config');


var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('resume')
});

router.post('/feedback', function(req, res, next) {
  var name = req.body.name;
  var message = req.body.message;
  var downloadCode = req.body.downloadcode;

  console.log(`${name} - ${message} - ${downloadCode}`);

  db.query(`INSERT INTO feedback(name, message, downloadstatus) VALUES (
    '${name}', '${message}', 1);`, function (err, result){
    if(err){
        console.log('[SQL ERROR]:', err.message);

        res.json({
            data: { code: 0 },
            msg: '数据插入异常'
        });
    } else {
        res.json({
            data: {
                code: 1,
            },
            msg: {}
        });
    }
  });
});

module.exports = router;
