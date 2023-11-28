## Ejercicio para practica
Se crearan 2 BD en donde se guardara la informacion de acuerdo de donde venga.

## Como levantar el proyecto?
Requisitos:
- nodejs [Descargar](https://nodejs.org/)
- Docker
- VSCode [Descargar](https://code.visualstudio.com)


### Docker Desktop 
- [Decargar](https://www.docker.com/products/docker-desktop/)
- Instalar y abrir, esperar que la parte inferior de la pantalla del docker este verdecito
- Otras versiones: https://docs.docker.com/desktop/release-notes/

#### Docker verificar y preparar:
- Abrir terminal para probar si instaló correctamente
> docker --version
- Descargar imagen de postgres
> docker pull postgres:14.3

### Abrir proyecto con VSCode
- Abrir carpeta de proyecto en VSCode.


### Iniciar BD postgres-py con docker 
- Por linea de comandos ir al directorio /bd/postgres-py/
- Levantar
> docker-compose up -d
- Cuando ya no se use, parar 
> docker-compose down 

### Iniciar BD postgres-resto con docker
- Por linea de comandos ir al directorio /bd/postgres-resto/
- Levantar
> docker-compose up -d
- Cuando ya no se use, parar 
> docker-compose down 


## Base de datos
- Conectarse con `algun` cliente sql a las 2 BDs, lo archivos docker-compose.yaml tienen los datos de conexion. Recomendado [Beekeeper Studio Community](https://github.com/beekeeper-studio/beekeeper-studio)
- Ejecutar los scripts sql segun archivo [docs/creacion-tabla.md](docs/creacion-tabla.md)

## Levantar App
- Ir a la raiz del proyecto con linea de comandos
- Instalar librerias
> npm install
- Iniciar 
> npm start
- Probar acceder desde un navegador http://localhost:3000/ , debe responder con el saludo






