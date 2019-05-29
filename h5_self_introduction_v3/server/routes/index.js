var express = require('express');
var db = require('../db');
var config = require('../config');
var xss = require('node-xss').clean;


var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('resume')
});

router.post('/feedback', function(req, res, next) {
    // XSS过滤
    var data = xss(req.body);

    var name = data.name;
    var message = data.message;
    var downloadCode = data.downloadcode;

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
