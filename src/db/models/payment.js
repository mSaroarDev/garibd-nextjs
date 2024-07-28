import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    amount: {
      type: String,
      required: true,
    },
    trxId: {
      type: String,
      required: true,
    },
    lastDigit: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["Pending", "Rejected", "Under Review", "Accepted"],
      default: "Pending",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const paymentModel =
  mongoose.models.Payment || mongoose.model("Payment", paymentSchema);
export default paymentModel;
