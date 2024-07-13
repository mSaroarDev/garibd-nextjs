import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    nid_card_front: {
      type: String,
      required: false,
    },
    nid_card_back: {
      type: String,
      required: false,
    },
    home_electricity_bill: {
      type: String,
      required: false,
    },
    approval_status: {
      type: String,
      enum: ["Not Uploaded", "Pending", "Rejected", "Verified"],
      default: "Not Uploaded",
      required: false,
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

const documentModel =
  mongoose.models.Document || mongoose.model("Document", documentSchema);
export default documentModel;
