const { Pool } = require("pg");


const poolCompraPy = new Pool({
    user: 'comprauser',
    host: 'localhost',
    database: 'compraspy',
    password: '12345',
    port: 10000,
});

module.exports = poolCompraPy;

