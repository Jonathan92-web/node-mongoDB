const customerSuscriptionModel = require("../models/customers.model");

const customerSuscriptionController = {
  /**
   * Save a new customer.
   * @param {import('express').Request} req - The Express request object.
   * @param {import('express').Response} res - The Express response object.
   * @returns {void}
   */
  guardarCliente: async function (req, res) {
    const customer = new customerSuscriptionModel(req.body);
    await customer.save();
    res.status(200).json(customer);
  },
  /**
   * Get a list of all customers.
   * @param {import('express').Request} req - The Express request object.
   * @param {import('express').Response} res - The Express response object.
   * @returns {void}
   */
  obtenerClientes: async function (req, res) {
    //en una sola de linea regreso todos los clientes que hay en la base de datos
    res.status(200).json(await customerSuscriptionModel.find());
  },
};

module.exports = customerSuscriptionController;
