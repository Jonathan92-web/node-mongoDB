const Router = require("express").Router();
const Product = require("../models/product.model");

/**
 * @route POST /products
 * @group Products - Operations about products
 * @param {Product.model} product.body.required - The product to create.
 * @returns {string} 200 - "created"
 * @returns {string} 500 - "error"
 */
Router.post(
  "/",
  /**
   * Create a new product.
   * @param {import('express').Request} req - The Express request object.
   * @param {import('express').Response} res - The Express response object.
   * @returns {void}
   */
  async function (req, res) {
    try {
      const product = new Product(req.body);
      await product.save();
      res.status(200).json("created");
    } catch (err) {
      res.status(500).json("error");
    }
  }
);

/**
 * @route GET /products
 * @group Products - Operations about products
 * @returns {Array.<Product>} 200 - An array of products.
 * @returns {string} 500 - "error"
 */
Router.get(
  "/",
  /**
   * Get a list of all products.
   * @param {import('express').Request} req - The Express request object.
   * @param {import('express').Response} res - The Express response object.
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
