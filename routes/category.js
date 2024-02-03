import { Router } from "express";
import verifyAccessToken from "../middlewares/verifyAccessToken.js";
import destroy from "../controllers/category/destroy.js";
import update from "../controllers/category/update.js";
import index from "../controllers/category/index.js";
import store from "../controllers/category/store.js";
import show from "../controllers/category/show.js";
import upload from "../utils/fileUploadConfig.js";

const categoryRoutes = Router();

categoryRoutes.get("/", verifyAccessToken, index); // get all

categoryRoutes.post("/", verifyAccessToken, upload.single("icon"), store); // create

categoryRoutes.get("/:id", verifyAccessToken, show); // get single

categoryRoutes.put("/:id", verifyAccessToken, upload.single("icon"), update); // update

categoryRoutes.delete("/:id", verifyAccessToken, destroy); // delete

export default categoryRoutes;
