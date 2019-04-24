const mysql = require('mysql');
//创建连接池
var pool = mysql.createPool({
    host: process.env.MYSQL_HOST || '127.0.0.1',
    port: process.env.MYSQL_PORT || 3306,
    user: process.env.ACCESSKEY || 'root',
    password: process.env.SECRETKEY || '',
    // database: 'eaterytwo',
    database: 'app_' + process.env.APPNAME, //使用的数据库
    connectionLimit: 20 //设置连接池的数量
});

module.exports=pool;