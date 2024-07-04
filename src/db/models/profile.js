import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    name_en: {
      type: String,
      required: false,
    },
    name_bn: {
      type: String,
      required: false,
    },
    father_name: {
      type: String,
      required: false,
    },
    mother_name: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      required: false,
    },
    dob: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    nid_no: {
      type: String,
      required: false,
    },
    profile_image: {
      type: String,
      required: false,
    },
    nid_card_image: {
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

const profileModel =
  mongoose.models.Profile || mongoose.model("Profile", profileSchema);
export default profileModel;
