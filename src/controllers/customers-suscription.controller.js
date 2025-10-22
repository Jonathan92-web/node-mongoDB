const customerSuscriptionModel = require("../models/customers.model");

const customerSuscriptionController = {
  /**
   * Guarda un nuevo cliente.
   * @param {import('express').Request} req - El objeto de solicitud de Express.
   * @param {import('express').Response} res - El objeto de respuesta de Express.
   * @returns {void}
   */
  guardarCliente: async function (req, res) {
    const customer = new customerSuscriptionModel(req.body);
    await customer.save();
    res.status(200).json(customer);
  },
  /**
   * Obtiene una lista de todos los clientes.
   * @param {import('express').Request} req - El objeto de solicitud de Express.
   * @param {import('express').Response} res - El objeto de respuesta de Express.
   * @returns {void}
   */
  obtenerClientes: async function (req, res) {
    // En una sola línea, devuelve todos los clientes de la base de datos.
    res.status(200).json(await customerSuscriptionModel.find());
  },
};

module.exports = customerSuscriptionController;
