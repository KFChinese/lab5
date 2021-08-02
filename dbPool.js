const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit: 10,
    host: "ckshdphy86qnz0bj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "ixqblcdkrkvtb19y",
    password: "jzmyxsf0a1jjheoq",
    database: "lv6k7hosunqxz2ac"
});

module.exports = pool;
