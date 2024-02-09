import { Schema, model } from "mongoose";

const cartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Cart = model("Cart", cartSchema);
export default Cart;
