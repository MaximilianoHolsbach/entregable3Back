/**
 *  A modo de ayuda memoria voy a redactar los pasos para iniciar un server express: 
 * 
 * Paso 1 : npm init -y
 * 
 * Paso 2 : npm i -D nodemon // npm i express
 * 
 * Paso 3 : En el archivo package
 *  "type": "module"
 *  "main": "server.js",
 *  "start": "node ./server.js",
 *  "dev": "nodemon ./server.js",
 * 
 * Paso 4 : en consola ejecutar npm run dev
 * 
 */

// > Entregable Número 3 de la clase número 6: servidores web.


import express from "express" // Importamos el framework 

const server = express(); // Instanciamos al server

const port = 8080 // Asignamos el número de puerto

const ready = () => console.log(`Server ready on port ${port}`); // Imprimimos el mensaje, que avisa si el server esta en línea

server.listen(port,ready)

const indexRoute = "/" // Ruta de inicio 
