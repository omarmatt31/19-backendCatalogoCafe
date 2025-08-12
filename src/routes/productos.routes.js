import { Router } from "express";
import { crearProductos, leerProductos, test } from "../controllers/productos.controllers.js";

const router = Router();

//get, post, put, delete
router.route('/test').get(test)
router.route('/').get(leerProductos).post(crearProductos)

export default router;