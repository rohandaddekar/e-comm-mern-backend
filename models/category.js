import { Schema, model } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default:
        "https://res.cloudinary.com/dgkkdtamu/image/upload/v1704888243/blog-laravel/lyuxvzj9yl87zaedf4da.png",
      required: true,
    },
  },
  { timestamps: true }
);

const Category = model("Category", categorySchema);
export default Category;
