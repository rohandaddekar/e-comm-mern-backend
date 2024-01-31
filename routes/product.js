import { Router } from "express";
import verifyAccessToken from "../middlewares/verifyAccessToken.js";
import validationError from "../utils/validationError.js";
import destroy from "../controllers/product/destroy.js";
import update from "../controllers/product/update.js";
import index from "../controllers/product/index.js";
import store from "../controllers/product/store.js";
import show from "../controllers/product/show.js";

const productRoutes = Router();

productRoutes.get("/", verifyAccessToken, index); // get all

productRoutes.post("/", verifyAccessToken, validationError, store); // create

productRoutes.get("/:id", verifyAccessToken, show); // get single

productRoutes.put("/:id", verifyAccessToken, validationError, update); // update

productRoutes.delete("/:id", verifyAccessToken, destroy); // delete

export default productRoutes;
