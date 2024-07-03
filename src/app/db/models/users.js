import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  nickname: {
    type: String,
    required: true,
    trim: true,
  },
  mobile: {
    type: String,
    required: true,
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
  profile: {
    type: mongoose.Types.ObjectId,
    ref: "Profile",
  },
});

const userModel = mongoose.models.User || mongoose.model("User", userSchema);
export default userModel;
