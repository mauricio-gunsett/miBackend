import express from "express";
import { getUsers } from "../controllers/userController.js";

// aqui decimos que vamos a crear un router a partir de express
const router = express.Router();
// esto quiere decir que vamos a crear una ruta q funcionara con el metodo get paara otener todos los usuarios
// el primer parametro sera cual va a ser nuestra ruta en este caso la ruta vacia
// el segundo parametro es lo que pasara cuando esa ruta se ejecute
// configurar respuesta dentro del colbac que lo conocemos como controlador puede llevar 2 parametros
// 1er parametro request vamos a poder acceder a toda la informacion que viene en la petición se lo abrevia en req
// 2do parametro response vamos a poder devolver algo se lo abrevia en res de aqui lo mudamos a usercontroller
router.get("/", getUsers);

// para exportar todo lo que creamos y volvemos al index.js
export default router;
