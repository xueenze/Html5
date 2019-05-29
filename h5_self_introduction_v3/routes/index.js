var express = require('express');
var db = require('../db');
var config = require('../config');
var xss = require('node-xss').clean;


var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('OK');
});

router.post('/feedback', function(req, res, next) {
    // XSS过滤
    var data = xss(req.body);

    var name = data.name;
    var message = data.message;
    var downloadCode = data.downloadcode;
    var status = 1;
    var resumeUrl = '';

    console.log(`${name} - ${message} - ${downloadCode}`);

    if (downloadCode == config.downloadcode) {
        status = 2;
        resumeUrl = 'https://www.baidu.com';
    }

    db.query(`INSERT INTO feedback(name, message, downloadstatus) VALUES (
        '${name}', '${message}', '${status}');`, function (err, result){
        if(err){
            console.log('[SQL ERROR]:', err.message);

            // 进入LOG
        }
    });

    // 这里我们一律返回插入成功
    res.json({
        data: {
            code: status,
            resumeUrl,
        },
        msg: {}
    });
});

module.exports = router;