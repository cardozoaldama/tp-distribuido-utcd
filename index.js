const express = require("express");
const poolCompraPy = require("./ConexionBdPy");


console.log("Hola, estoy iniciando");


const app = express();



app.get('/', async (req, res) => {
    try {
        const result = {
            saludo: "Hola mundo"
        };
        res.json(result);
    } catch (error) {
        console.error("Error grave en el servidor", error);
        res.status(500).send("Error grave en el servidor");
    }
});


app.get('/compras/py', async (req, res) => {
    try {
        const result = await poolCompraPy.query("SELECT * FROM compras");
        res.json(result.rows);
    } catch (error) {
        console.error("Error grave en el servidor", error);
        res.status(500).send("Error grave en el servidor");
    }
});

/*POST PARA GUARDAR NUEVO REGISTRO */
/*PEro, usaremos GET con fines didacticos para ejecutar directo desde el navegador */
app.get('/compras/py/agregar', async (req, res) => {
    try {
        const compra = {
            producto: "mouse",
            cantidad: 5,
            precio_unitario: 10000,
            total: 50000,
            fecha_compra: '2023-11-21'
        };

        const query = `
                INSERT INTO compras (producto, cantidad, precio_unitario, total, fecha_compra)
                VALUES ($1, $2, $3, $4, $5)
                `;

        await poolCompraPy.query(query,
            [compra.producto, compra.cantidad, compra.precio_unitario, compra.total, compra.fecha_compra],
            (error, resultado) => {
                if (error) {
                    console.error("Error al insertar: ", error);
                } else {
                    console.log("Insercion correcta: ");
                }
                //poolCompraPy.end();
            }
        );

        const result = {
            mensaje: "Registro insertado correctamente"
        }

        res.json(result);
    } catch (error) {
        console.error("Error grave en el servidor al insertar", error);
        res.status(500).send("Error grave en el servidor al insertar");
    }
});





const puerto = 3000;
app.listen(puerto, () => {
    console.log("Servidor iniciado correctamente en puerto: " + puerto);
}
);

