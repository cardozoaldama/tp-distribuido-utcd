## Ejercicio para practicar

Se crearán 2 Base de Datos en donde se guardará la información de acuerdo de donde venga los datos.

## ¿Cómo levantar el proyecto?

Requisitos:

- Node JS: [Descargar](https://nodejs.org/)
- Docker: [Descargar](https://www.docker.com/)
- VSCode: [Descargar](https://code.visualstudio.com)


### Docker Desktop 

- Link de [descarga](https://www.docker.com/products/docker-desktop/)
- Instalar y abrir, esperar que la parte inferior de la pantalla del docker esté en verde o que demuestre que está en funcionamiento.
- Otras versiones: [verificar](https://docs.docker.com/desktop/release-notes/)

#### Docker verificar y preparar:

- Abrir terminal para comprobar si se instaló correctamente:

```
docker --version
```

- Descargar la **imagen** de PostgreSQL:

```
docker pull postgres:14.3
```

### Abrir proyecto con VSCode
- Abrir carpeta de proyecto en **VSCode**.


### Iniciar BD postgres-py con docker 
- Por línea de comandos ir al directorio `$ cd /bd/postgres-py/`-
- Levantar con: `docker-compose up -d`.
- Cuando ya no se use, parar con: ` docker-compose down`.

### Iniciar BD postgres-resto con docker
- Por linea de comandos ir al directorio /bd/postgres-resto/
- Levantar con: `docker-compose up -d`.
- Cuando ya no se use, parar con: ` docker-compose down`.


## Base de datos
- Conectarse con *algún* cliente **SQL** a las 2 BDs, lo archivos `docker-compose.yaml` tienen los datos de conexión. Recomendado usar: [Beekeeper Studio Community](https://github.com/beekeeper-studio/beekeeper-studio)
- Ejecutar los scripts SQL según archivo: [docs/creacion-tabla.md](docs/creacion-tabla.md)

## Levantar la APP
- Ir a la raíz del proyecto con línea de comandos
- Instalar librerias: `npm install`
- Iniciar con `npm start`
- Probar en acceder desde un navegador http://localhost:3000/ , y debe responder con el saludo de `saludo: "Hola mundo"`!






