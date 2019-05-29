var mysql = require("mysql");

var pool = mysql.createPool({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'root',
    database:'resume'
});

function query(sql,callback){
    pool.getConnection(function(err,connection){
        connection.query(sql, function (err,rows) {
            callback(err,rows);
            connection.release();
        });
    });
}

exports.query = query;