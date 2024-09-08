const customerSuscriptionModel = require("../models/customers.model");

const customerSuscriptionController = {
  guardarCliente: async function (req, res) {
    const customer = new customerSuscriptionModel(req.body);
    await customer.save();
    res.status(200).json(customer);
  },
  obtenerClientes: async function (req, res) {
    //en una sola de linea regreso todos los clientes que hay en la base de datos
    res.status(200).json(await customerSuscriptionModel.find());
  },
};

module.exports = customerSuscriptionController;
