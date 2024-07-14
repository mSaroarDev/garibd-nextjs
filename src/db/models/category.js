import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
    categoryIcon: {
      type: String,
      required: true,
    },
    ads: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Ad",
      },
    ],
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

const categoryModel =
  mongoose.models.Category || mongoose.model("Category", categorySchema);
export default categoryModel;
