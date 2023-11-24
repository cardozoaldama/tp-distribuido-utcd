## Tabla compras
- Tabla que contiene los productos comprados
```sql
CREATE TABLE compras (
    id SERIAL PRIMARY KEY,
    producto VARCHAR(255) NOT NULL,
    cantidad INTEGER NOT NULL,
    precio_unitario DECIMAL(10, 2) NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    fecha_compra DATE NOT NULL
);
```
- insertar dato de prueba
```sql
INSERT INTO compras (producto, cantidad, precio_unitario, total, fecha_compra)
VALUES ('computadora', 1, 860, 860, '2023-11-21');
```