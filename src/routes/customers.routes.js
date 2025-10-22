const miRouter = require("express").Router();
const customerSuscriptionController = require("../controllers/customers-suscription.controller");

/**
 * @route POST /customers/suscription
 * @group Customers - Operations about customers
 * @param {CustomerSubscription.model} customer.body.required - The customer to create.
 * @returns {CustomerSubscription.model} 200 - The created customer.
 * @returns {string} 500 - "error"
 */
miRouter.post("/suscription", customerSuscriptionController.guardarCliente);
/**
 * @route GET /customers/obtenerclientes
 * @group Customers - Operations about customers
 * @returns {Array.<CustomerSubscription>} 200 - An array of customers.
 * @returns {string} 500 - "error"
 */
miRouter.get("/obtenerclientes", customerSuscriptionController.obtenerClientes);

module.exports = miRouter;
