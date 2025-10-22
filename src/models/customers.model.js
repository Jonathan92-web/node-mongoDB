const mongoose = require("mongoose");
const customerSuscription = mongoose.Schema;

/**
 * @typedef {object} SuscripcionCliente
 * @property {string} email - El email del cliente.
 * @property {Date} suscription_date - La fecha de la suscripción.
 */

/**
 * Esquema de Mongoose para la suscripción de un cliente.
 * @type {mongoose.Schema}
 */
const customerSuscriptionSchema = new customerSuscription({
  email: String,

  suscription_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("customers", customerSuscriptionSchema);
