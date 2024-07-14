import mongoose from "mongoose";

const adSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    categoryId: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    strict: true,
    strictQuery: true,
  }
);

const adModel = mongoose.models.Ad || mongoose.model("Ad", adSchema);
export default adModel;
