// This file configures a connection to a PostgreSQL database.

// Using the "pg" module:
// This module is used to interact with PostgreSQL databases in Node.js environments.
// Import the "Pool" module from the "pg" package.
const { Pool } = require("pg");

// Create a new instance of Pool with the database configuration.
const poolCompraPy = new Pool({
    // The user...
    user: 'comprauser',
    // The host.
    host: 'localhost',
    // The database.
    database: 'compraspy',
    // The password.
    password: '12345',
    // And, finally, the port.
    port: 10000,
    /* This is an efficient technique for handling 
    database connections in Node.js applications. */
});

// HOMEWORK!
// Create a new PoolCompraResto, just like poolCompraPy.
const poolCompraResto = new Pool({
    // User:
    user: 'comprauser',
    // Host:
    host: 'localhost',
    // The PostgreSQL database:
    database: 'comprasresto',
    // Our password:
    password: '12345',
    // And, finally, our port:
    port: 10001,
});

// Export the Pool instance so it can be used in other files!
module.exports = poolCompraPy;
// This is the new kid in town!
module.exports = poolCompraResto;
/* You can use the exported file in other files of your Node.js project 
to perform queries on the PostgreSQL database. */