import { Router } from "express";
import verifyAccessToken from "../middlewares/verifyAccessToken.js";
import destroy from "../controllers/product/destroy.js";
import update from "../controllers/product/update.js";
import index from "../controllers/product/index.js";
import store from "../controllers/product/store.js";
import show from "../controllers/product/show.js";
import upload from "../utils/fileUploadConfig.js";

const productRoutes = Router();

productRoutes.get("/", verifyAccessToken, index); // get all

productRoutes.post("/", verifyAccessToken, upload.array("images", 5), store); // create

productRoutes.get("/:id", verifyAccessToken, show); // get single

productRoutes.put("/:id", verifyAccessToken, update); // update

productRoutes.delete("/:id", verifyAccessToken, destroy); // delete

export default productRoutes;
