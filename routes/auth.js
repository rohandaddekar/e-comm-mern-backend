import { Router } from "express";
import verifyAccessToken from "../middlewares/verifyAccessToken.js";
import signUpValidation from "../validations/auth/signUp.js";
import validationError from "../utils/validationError.js";
import signInValidation from "../validations/auth/signIn.js";
import signUp from "../controllers/auth/signUp.js";
import signIn from "../controllers/auth/signIn.js";
import signOut from "../controllers/auth/signOut.js";

const authRoutes = Router();

authRoutes.post("/sign-up", signUpValidation, validationError, signUp);
authRoutes.post("/sign-in", signInValidation, validationError, signIn);
authRoutes.get("/sign-out", verifyAccessToken, signOut);

export default authRoutes;
