import mongoose from "mongoose";

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

export default mongoose.model("Order", orderSchema);
