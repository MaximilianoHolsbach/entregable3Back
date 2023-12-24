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

import express from "express"; // Importamos el framework

import producto from "./data/fs/ProductFsManager.js";

import user from "./data/fs/UserFsManager.js";

const server = express(); // Instanciamos al server

server.use(express.urlencoded({ extended: true }));

const port = 8080; // Asignamos el número de puerto

const ready = () => console.log(`Server ready on port ${port}`); // Imprimimos el mensaje, que avisa si el server esta en línea

server.listen(port, ready);

server.get("/api/products", (req, res) => {
  try {
    const allproducts = producto.read();
    if (Array.isArray(allproducts)) {
      // comprobamos si allproducts es un array
      return res.status(200).json({
        succes: true,
        response: allproducts,
      });
    } else {
      return res.status(404).json({
        succes: false,
        response: allproducts,
      });
    }
  } catch (error) {
    res.status(500).json({
      succes: false,
      message: error.message,
    });
  }
});

server.get("/api/products/:pid", (req, res) => {
  try {
    const { pid } = req.params;
    const product = producto.readOne(pid);
    if (typeof product === "object") {
      return res.status(200).json({
        succes: true,
        product,
      });
    } else {
      res.status(404).json({
        succes: false,
        response: "Not found!",
      });
    }
  } catch (error) {
    res.status(500).json({
      succes: false,
      response: error.message,
    });
  }
});

server.get("/api/users", (req, res) => {
  try {
    const allUsers = user.read();
    if (Array.isArray(allUsers)) {
      return res.status(200).json({
        succes: true,
        response: allUsers,
      });
    } else {
      return res.status(404).json({
        succes: false,
        response: allUsers,
      });
    }
  } catch (error) {
    return res.status(500).json({
      succes: false,
      response: error.message,
    });
  }
});

server.get("/api/users/:uid", (req, res) => {
  try {
    const { uid } = req.params;
    const usuario = user.readOne(uid);
    if (typeof usuario == "object") {
      return res.status(200).json({
        succes: true,
        response: usuario,
      });
    } else {
      return res.status(404).json({
        succes: false,
        response: usuario,
      });
    }
  } catch (error) {
    return res.status(500).json({
      succes: false,
      response: error.message,
    });
  }
});
