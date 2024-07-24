import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    nickname: {
      type: String,
      required: false,
      trim: true,
    },
    mobile: {
      type: String,
      required: false,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      required: true,
      enum: ["User", "Admin", "Developer"],
      default: "User",
    },
    status: {
      type: String,
      enum: ["Active", "Pending", "Blocked"],
      default: "Active",
    },
    member_access_status: {
      type: String,
      enum: ["Active", "Banned", "Warned"],
      default: "Active",
      required: true,
    },
    store: {
      type: mongoose.Types.ObjectId,
      ref: "Store",
    },
    packages: [
      {
        type: mongoose.Types.ObjectId,
        ref: "PurchasePackage",
      },
    ],
    profile: {
      type: mongoose.Types.ObjectId,
      ref: "Profile",
    },
    documents: {
      type: mongoose.Types.ObjectId,
      ref: "Document",
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.models.User || mongoose.model("User", userSchema);
export default userModel;
