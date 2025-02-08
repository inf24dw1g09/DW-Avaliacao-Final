'user strict';

var mysql = require('mysql2');
require('dotenv').config();

var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'cami'
});

connection.connect (function (err){
    if (err){
        console.log('Error on database connection.');
        throw err;
    }
console.log('Database connection active.');
});

module.exports = connection;
