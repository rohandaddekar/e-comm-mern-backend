import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["superAdmin", "admin", "customer"],
      default: "customer",
    },
    isVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
    verificationToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);
export default User;
