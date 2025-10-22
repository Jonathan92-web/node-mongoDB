const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * @typedef {object} Product
 * @property {string} ref - The reference of the product.
 * @property {string} price - The price of the product.
 * @property {string} description - The description of the product.
 * @property {boolean} isAvailable - Whether the product is available or not.
 */

/**
 * Mongoose schema for a product.
 * @type {mongoose.Schema}
 */
const Product = new Schema({
  ref: String,
  price: String,
description: String,
  isAvailable: Boolean,
});

module.exports = mongoose.model("products", Product);
