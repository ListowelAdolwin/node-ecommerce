const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'node_ecommerce',
    database: 'node_ecommerce',
    password: 'node_ecommerce'
});

module.exports = pool.promise();