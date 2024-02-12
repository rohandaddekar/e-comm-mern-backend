import { Router } from "express";
import show from "../controllers/cart/show.js";
import store from "../controllers/cart/store.js";
import index from "../controllers/cart/index.js";
import validationError from "../utils/validationError.js";
import addCartItemValidation from "../validations/cart/store.js";
import verifyAccessToken from "../middlewares/verifyAccessToken.js";
import destroy from "../controllers/cart/destroy.js";
import clearCart from "../controllers/cart/clearCart.js";

const cartRoutes = Router();

// all cart items
cartRoutes.get("/items/:cartId", verifyAccessToken, index);

// add item to cart
cartRoutes.post(
  "/add-item",
  verifyAccessToken,
  addCartItemValidation,
  validationError,
  store
);

// cart item details by productId
cartRoutes.get("/:productId", show);

// cart item delete
cartRoutes.delete("/:id", verifyAccessToken, destroy);

// clear cart
cartRoutes.delete("/clear/:cartId", verifyAccessToken, clearCart);

export default cartRoutes;
