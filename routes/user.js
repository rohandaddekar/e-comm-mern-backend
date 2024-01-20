import { Router } from "express";
import verifyAccessToken from "../middlewares/verifyAccessToken.js";
import index from "../controllers/user/index.js";
import show from "../controllers/user/show.js";
import update from "../controllers/user/update.js";
import destroy from "../controllers/user/destroy.js";
import userUpdateValidation from "../validations/user/update.js";
import validationError from "../utils/validationError.js";

const userRoutes = Router();

userRoutes.get("/", verifyAccessToken, index); // get all users

userRoutes.get("/:id", verifyAccessToken, show); // get single user

userRoutes.put(
  "/:id",
  verifyAccessToken,
  userUpdateValidation,
  validationError,
  update
); // update user

userRoutes.delete("/:id", verifyAccessToken, destroy); // delete user

export default userRoutes;
