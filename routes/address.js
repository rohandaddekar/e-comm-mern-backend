import { Router } from "express";
import verifyAccessToken from "../middlewares/verifyAccessToken.js";
import index from "../controllers/address/index.js";
import store from "../controllers/address/store.js";
import show from "../controllers/address/show.js";
import update from "../controllers/address/update.js";
import destroy from "../controllers/address/destroy.js";
import validationError from "../utils/validationError.js";
import storeAddressValidation from "../validations/address/store.js";

const addressRoutes = Router();

// get all addresses
addressRoutes.get("/", verifyAccessToken, index);

// create new address
addressRoutes.post(
  "/",
  verifyAccessToken,
  storeAddressValidation,
  validationError,
  store
);

// get single address
addressRoutes.get("/:id", verifyAccessToken, show);

// update address
addressRoutes.put(
  "/:id",
  verifyAccessToken,
  storeAddressValidation,
  validationError,
  update
);

// delete address
addressRoutes.delete("/:id", verifyAccessToken, destroy);

export default addressRoutes;
