const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * @typedef {object} Producto
 * @property {string} ref - La referencia del producto.
 * @property {number} price - El precio del producto.
 * @property {string} description - La descripción del producto.
 * @property {boolean} isAvailable - Si el producto está disponible o no.
 */

/**
 * Esquema de Mongoose para un producto.
 * @type {mongoose.Schema}
 */
const Product = new Schema({
  ref: String,
  price: Number,
  description: String,
  isAvailable: Boolean,
});

module.exports = mongoose.model("products", Product);
