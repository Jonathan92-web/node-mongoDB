const miRouter = require("express").Router();
const customerSuscriptionController = require("../controllers/customers-suscription.controller");

/**
 * @route POST /customers/suscription
 * @group Clientes - Operaciones sobre clientes
 * @param {CustomerSubscription.model} customer.body.required - El cliente a crear.
 * @returns {CustomerSubscription.model} 200 - El cliente creado.
 * @returns {string} 500 - "error"
 */
miRouter.post("/suscription", customerSuscriptionController.guardarCliente);
/**
 * @route GET /customers/obtenerclientes
 * @group Clientes - Operaciones sobre clientes
 * @returns {Array.<CustomerSubscription>} 200 - Un arreglo de clientes.
 * @returns {string} 500 - "error"
 */
miRouter.get("/obtenerclientes", customerSuscriptionController.obtenerClientes);

module.exports = miRouter;
