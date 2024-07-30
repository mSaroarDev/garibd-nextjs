import mongoose from "mongoose";

const adSchema = new mongoose.Schema(
  {
    ad_type: {
      type: String,
      required: true,
    },
    ad_name: {
      type: String,
      required: true,
    },
    categoryId: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
    companyId: {
      type: mongoose.Types.ObjectId,
      ref: "Company",
    },
    condition: {
      type: String,
      required: true,
    },
    short_desc: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: false,
    },
    kilo_hr: {
      type: String,
      required: false,
    },
    others_info: {
      type: Object,
      required: false,
    },
    air_condition: {
      type: String,
      required: false,
    },
    power_stearing: {
      type: String,
      required: false,
    },
    fuel_type: {
      type: String,
      required: false,
    },
    documents: {
      type: String,
      required: false,
    },
    driver_type: {
      type: String,
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

const adModel = mongoose.models.Ad || mongoose.model("Ad", adSchema);
export default adModel;
