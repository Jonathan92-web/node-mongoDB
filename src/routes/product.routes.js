const Router = require("express").Router();
const Product = require("../models/product.model");

/**
 * @route POST /products
 * @group Productos - Operaciones sobre productos
 * @param {Producto.model} product.body.required - El producto a crear.
 * @returns {string} 200 - "creado"
 * @returns {string} 500 - "error"
 */
Router.post(
  "/",
  /**
   * Crea un nuevo producto.
   * @param {import('express').Request} req - El objeto de solicitud de Express.
   * @param {import('express').Response} res - El objeto de respuesta de Express.
   * @returns {void}
   */
  async function (req, res) {
    try {
      const product = new Product(req.body);
      await product.save();
      res.status(200).json("creado");
    } catch (err) {
      res.status(500).json("error");
    }
  }
);

/**
 * @route GET /products
 * @group Productos - Operaciones sobre productos
 * @returns {Array.<Producto>} 200 - Un arreglo de productos.
 * @returns {string} 500 - "error"
 */
Router.get(
  "/",
  /**
   * Obtiene una lista de todos los productos.
   * @param {import('express').Request} req - El objeto de solicitud de Express.
   * @param {import('express').Response} res - El objeto de respuesta de Express.
   * @returns {void}
   */
  async function (req, res) {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json("error");
    }
  }
);
module.exports = Router;
