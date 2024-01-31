import { Router } from "express";
import storeCategoryValidation from "../validations/category/store.js";
import verifyAccessToken from "../middlewares/verifyAccessToken.js";
import validationError from "../utils/validationError.js";
import destroy from "../controllers/category/destroy.js";
import update from "../controllers/category/update.js";
import index from "../controllers/category/index.js";
import store from "../controllers/category/store.js";
import show from "../controllers/category/show.js";

const categoryRoutes = Router();

categoryRoutes.get("/", verifyAccessToken, index); // get all

categoryRoutes.post(
  "/",
  verifyAccessToken,
  storeCategoryValidation,
  validationError,
  store
); // create

categoryRoutes.get("/:id", verifyAccessToken, show); // get single

categoryRoutes.put(
  "/:id",
  verifyAccessToken,
  storeCategoryValidation,
  validationError,
  update
); // update

categoryRoutes.delete("/:id", verifyAccessToken, destroy); // delete

export default categoryRoutes;
