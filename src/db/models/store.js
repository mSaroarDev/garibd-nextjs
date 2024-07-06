import mongoose from "mongoose";

const storeSchema = new mongoose.Schema(
  {
    store_name: {
      type: String,
      required: false,
    },
    store_address: {
      type: String,
      required: false,
    },
    store_type: {
      type: String,
      enum: ["All", "Physical", "Virtual"],
      default: "All",
      required: false,
    },
    store_product_type: {
      type: String,
      enum: [
        "All",
        "New",
        "Old",
        "Recondition",
        "New & Old",
        "New & Recondition",
        "New, Old & Recondition",
      ],
      default: "All",
      required: false,
    },
    store_owener_name: {
      type: String,
      requred: false,
    },
    store_ads: {
      type: Array,
      required: false,
      default: [],
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

const storeModel =
  mongoose.models.Store || mongoose.model("Store", storeSchema);
export default storeModel;
