import { Router } from "express";
import authRoutes from "./auth.js";
import userRoutes from "./user.js";
import cartRoutes from "./cart.js";
import addressRoutes from "./address.js";
import categoryRoutes from "./category.js";
import productRoutes from "./product.js";

const apiRoutes = Router();

apiRoutes.use("/auth", authRoutes);
apiRoutes.use("/user", userRoutes);
apiRoutes.use("/cart", cartRoutes);
apiRoutes.use("/address", addressRoutes);
apiRoutes.use("/product", productRoutes);
apiRoutes.use("/category", categoryRoutes);

export default apiRoutes;
