import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      default:
        "https://res.cloudinary.com/dgkkdtamu/image/upload/v1704888243/blog-laravel/lyuxvzj9yl87zaedf4da.png",
      required: true,
    },
    images: [
      {
        type: String,
      },
    ],
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    discountPercentage: {
      type: Number,
      min: 0,
      default: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true }
);

const Product = model("Product", productSchema);
export default Product;
