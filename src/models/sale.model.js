const { default: mongoose } = require("mongoose");

const Schema = require("mongoose").Schema;

/**
 * @typedef {object} Sale
 * @property {number} quantity - The quantity of the sale.
 * @property {Date} date - The date of the sale.
 * @property {string} product - The product of the sale.
 * @property {number} total - The total of the sale.
 */

/**
 * Mongoose schema for a sale.
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
