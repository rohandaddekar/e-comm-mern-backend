import { Schema, model } from "mongoose";
import Address from "./address.js";

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
    profileImg: {
      type: String,
      default:
        "https://res.cloudinary.com/dgkkdtamu/image/upload/v1704888377/blog-laravel/mzwf9dxdoirqzv44sqke.png",
    },
    verificationToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre(
  "deleteOne",
  { document: true, query: false },
  async function () {
    const userId = this._id;

    try {
      await Address.deleteMany({ userId });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "failed to delete user reference docs",
      });
    }
  }
);

const User = model("User", userSchema);
export default User;
