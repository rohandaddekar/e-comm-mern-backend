import { Router } from "express";
import authRoutes from "./auth.js";
import userRoutes from "./user.js";
import addressRoutes from "./address.js";

const apiRoutes = Router();

apiRoutes.use("/auth", authRoutes);
apiRoutes.use("/user", userRoutes);
apiRoutes.use("/address", addressRoutes);

export default apiRoutes;
