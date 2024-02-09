import { Router } from "express";
import store from "../controllers/cart/store.js";
import index from "../controllers/cart/index.js";
import validationError from "../utils/validationError.js";
import addCartItemValidation from "../validations/cart/store.js";
import verifyAccessToken from "../middlewares/verifyAccessToken.js";

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

export default cartRoutes;
