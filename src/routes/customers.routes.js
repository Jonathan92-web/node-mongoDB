const miRouter = require("express").Router();
const customerSuscriptionController = require("../controllers/customers-suscription.controller");

miRouter.post("/suscription", customerSuscriptionController.guardarCliente);
miRouter.get("/obtenerclientes", customerSuscriptionController.obtenerClientes);

module.exports = miRouter;
