import mongoose from "mongoose";

const purchasePackageSchema = new mongoose.Schema(
  {
    package_data: {
      type: Object,
      required: true,
    },
    payment_info: {
      type: Object,
      required: false,
    },
    currStatus: {
      type: String,
      default: "Pending",
    },
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const purchasePackageModel =
  mongoose.models.PurchasePackage ||
  mongoose.model("PurchasePackage", purchasePackageSchema);
export default purchasePackageModel;
