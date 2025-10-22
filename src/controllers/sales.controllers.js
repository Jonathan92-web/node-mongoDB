const Sale = require("../models/sale.model");
const Product = require("../models/product.model");

const salesController = {
  /**
   * Obtiene una lista de todas las ventas.
   * @param {import('express').Request} req - El objeto de solicitud de Express.
   * @param {import('express').Response} res - El objeto de respuesta de Express.
   * @returns {void}
   */
  list: async function (req, res) {
    try {
      const sale = await Sale.find();
      res.status(200).json({ sale: sale });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  /**
   * Crea una nueva venta.
   * @param {import('express').Request} req - El objeto de solicitud de Express.
   * @param {import('express').Response} res - El objeto de respuesta de Express.
   * @returns {void}
   */
  create: async function (req, res) {
    try {
      const product = await Product.findById(req.body.product);

      if (!product) {
        return res.status(404).json({ error: "Producto no encontrado" });
      }

      const sale = new Sale(req.body);
      sale.total = sale.quantity * product.price;
      await sale.save();
      res.status(200).json({ sale: sale });
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = salesController;
