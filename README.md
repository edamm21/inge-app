# Inge 2 - App

## Docker Compose

Webapp - TODOs

Frontend: React.js  
Backend: Express.js + Node.js  
BD: PostgreSQL  

## Pre requisitos

Tener instalado `docker` localmente, como también `docker-compose`.

## Para ejecutar

Parados en la carpeta raíz ejecutar el siguiente comando:  
```
docker-compose up --build
```

Una vez completada la instalación de los contenedore, ejecutar los siguientes comandos en otra terminal:

```
docker ps
```
Obtener el hash correspondientes al contenedor de la base de datos postgre.

```
docker exec -ti <hash> bash
```

Una vez en la terminal de docker

```
psql -U postgres
create database inge;
\c inge;
CREATE TABLE todos(
    id SERIAL PRIMARY KEY,
    title text,
    description text,
    done boolean,
    deadline timestamp
);
ALTER TABLE todos ALTER COLUMN done SET DEFAULT false;
```

Por último, acceder desde un navegador a:

```
http://localhost:3000
```
