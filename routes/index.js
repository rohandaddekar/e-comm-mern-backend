import { Router } from "express";
import authRoutes from "./auth.js";
import userRoutes from "./user.js";
import addressRoutes from "./address.js";
import categoryRoutes from "./category.js";
import productRoutes from "./product.js";

const apiRoutes = Router();

apiRoutes.use("/auth", authRoutes);
apiRoutes.use("/user", userRoutes);
apiRoutes.use("/address", addressRoutes);
apiRoutes.use("/category", categoryRoutes);
apiRoutes.use("/products", productRoutes);

export default apiRoutes;
