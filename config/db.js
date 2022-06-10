const mysql = require("mysql2");

const conn = mysql.createConnection({
    database: 'pidev_3a5',
    host: '127.0.0.1',
    port: '8889',
    user: 'root',
    password: 'root'
});

module.exports = conn;