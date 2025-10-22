const Router = require("express").Router();
const Sale = require("../models/sale.model");
const salesController = require("../controllers/sales.controllers");

/**
 * @route GET /sales
 * @group Ventas - Operaciones sobre ventas
 * @returns {Array.<Venta>} 200 - Un arreglo de ventas.
 * @returns {string} 500 - "error"
 */
Router.get("/", salesController.list);
/**
 * @route POST /sales
 * @group Ventas - Operaciones sobre ventas
 * @param {Venta.model} sale.body.required - La venta a crear.
 * @returns {Venta.model} 200 - La venta creada.
 * @returns {string} 500 - "error"
 */
Router.post("/", salesController.create);

module.exports = Router;
