import mongoose from "mongoose";

const profileSchema = mongoose.Schema(
  {
    name_en: {
      type: String,
      required: true,
    },
    name_bn: {
      type: String,
      required: true,
    },
    father_name: {
      type: String,
      required: true,
    },
    mother_name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    nid_no: {
      type: String,
      required: true,
    },
    profile_image: {
      type: String,
      required: true,
    },
    nid_card_image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const profileModel = new mongoose.model("Profile", profileSchema);
export default profileModel;
