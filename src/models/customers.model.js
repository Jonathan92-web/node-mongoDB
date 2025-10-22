const mongoose = require("mongoose");
const customerSuscription = mongoose.Schema;

/**
 * @typedef {object} CustomerSubscription
 * @property {string} email - The email of the customer.
 * @property {Date} subscription_date - The date of the subscription.
 */

/**
 * Mongoose schema for a customer subscription.
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
