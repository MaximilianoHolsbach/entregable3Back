// > Entregable Número 3 de la clase número 6: servidores web. 

import express from "express" // Importamos el framework 

const server = express(); // Instanciamos al server

const port = 8080 // Asignamos el número de puerto

const ready = () => console.log(`Server ready on port ${port}`); // Imprimimos el mensaje, que avisa si el server esta en línea


