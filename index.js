// Starts with index.js

// Creating constants for Express and the "poolCompraPy" from ConexionBdPy.js:
// And they are importing dependencies.
const express = require("express");
// Express is a popular web framework for Node.js...
const poolCompraPy = require("./ConexionBdPy");
// The new dependency, poolCompraResto:
const poolCompraResto = require("./ConexionBdPy");

// Kinda a debug:
console.log("Hola, estoy iniciando");

// Initialize the Express connection:
const app = express();

// A main route to verify that the server is up and running!
// The ("/") is the main route.
app.get('/', async (req, res) => {
    // Try this first:
    try {
        // A constant again:
        const result = {
            saludo: "Hola mundo"
        };
        // The final result calling using JSON.
        res.json(result);
    // If there is an error:
    } catch (error) {
        // Shows us the error!
        console.error("Error grave en el servidor", error);
        res.status(500).send("Error grave en el servidor");
    }
});

// Route for all "compras" or purchases from the PostgreSQL database:
app.get('/compras/py', async (req, res) => {
    // Using a try, catch here.
    try {
        // Execute the SQL query in the database and return those results in JSON format!
        const result = await poolCompraPy.query("SELECT * FROM compras");
        res.json(result.rows);
    } catch (error) {
        // We could use a function here without repeating the code.
        // It's the same code as the first, up there.
        console.error("Error grave en el servidor", error);
        res.status(500).send("Error grave en el servidor");
    }
});

// Route to add a new purchase (compra) to the PostgreSQL database.
app.get('/compras/py/agregar', async (req, res) => {
    // Using try, catch, statement. 
    try {
        // Data of the purchase (compra) to be inserted!
        const compra = {
            // The name of the product:
            producto: "Cargador de Notebook",
            // Quantity of the product:
            cantidad: 4,
            // The unit price:
            precio_unitario: 500000,
            // The total one (a little math here):
            total: 2000000,
            // And date of the purchase.
            fecha_compra: '2023-11-29'
        };
        // SQL query to insert a new purchase (compra) into the database.
        // Please, insert into the "compras" these elements with its values, respectively:
        const query = `
                INSERT INTO compras (producto, cantidad, precio_unitario, total, fecha_compra)
                VALUES ($1, $2, $3, $4, $5)
                `;
        // Execute the SQL query with the provided parameters:
        await poolCompraPy.query(query,
            [compra.producto, compra.cantidad, compra.precio_unitario, compra.total, compra.fecha_compra],
            (error, resultado) => {
                if (error) {
                    console.error("Error al insertar: ", error);
                } else {
                    console.log("Insercion correcta: ");
                }
                // There was a commentary, and it's still:
                // Connection is not closed here to allow pool reuse
                //poolCompraPy.end();
            }
        );
        // The good message we want to hear!
        const result = {
            mensaje: "Registro insertado correctamente"
        }
        // This is the result as the up here.
        res.json(result);
    // In case there is an error:
    } catch (error) {
        console.error("Error grave en el servidor al insertar", error);
        res.status(500).send("Error grave en el servidor al insertar");
    }
});
// Port on which the Express application listens for requests:
const puerto = 3000;
app.listen(puerto, () => {
    // When it's successfully connected:
    console.log("Servidor iniciado correctamente en puerto: " + puerto);
}
);
