const mongoose = require("mongoose");
const customerSuscription = mongoose.Schema;

const customerSuscriptionSchema = new customerSuscription({
  email: String,

  suscription_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("customers", customerSuscriptionSchema);
