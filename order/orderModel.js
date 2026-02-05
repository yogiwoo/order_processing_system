const mongoose =require('mongoose')
const orderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "PENDING"
  },
  totalAmount: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});
const orderModel=mongoose.model("Order", orderSchema);
module.exports = orderModel
