const { default: mongoose } = require("mongoose");

const Schema = require("mongoose").Schema;

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
