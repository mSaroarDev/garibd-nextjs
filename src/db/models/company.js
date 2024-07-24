import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    companyIcon: {
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

const companyModel =
  mongoose.models.Company || mongoose.model("Company", companySchema);
export default companyModel;
