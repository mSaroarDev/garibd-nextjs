import mongoose from "mongoose";

const packageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    price: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
    value: {
      type: String,
      required: false,
    },
    duration: {
      type: String,
      required: false,
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

const packageModel =
  mongoose.models.Package || mongoose.model("Package", packageSchema);
export default packageModel;
