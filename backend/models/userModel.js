import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
    comfirmedPassword: {
      type: String,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
