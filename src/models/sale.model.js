const { default: mongoose } = require("mongoose");

const Schema = require("mongoose").Schema;

/**
 * @typedef {object} Venta
 * @property {number} quantity - La cantidad de la venta.
 * @property {Date} date - La fecha de la venta.
 * @property {string} product - El producto de la venta.
 * @property {number} total - El total de la venta.
 */

/**
 * Esquema de Mongoose para una venta.
 * @type {mongoose.Schema}
 */
const Sale = new Schema({
  quantity: {
    type: Number,
    min: 1,
    max: 2,
  },

  date: {
    type: Date,
    default: Date.now,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "products",
  },
  total: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("sales", Sale);
