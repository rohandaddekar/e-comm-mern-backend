import DbConnection from "./utils/DbConnection.js";
import { v2 as cloudinary } from "cloudinary";
import apiRoutes from "./routes/index.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/v1", apiRoutes);

const port = process.env.PORT || 8001;

app.listen(port, async () => {
  await DbConnection();
  console.log(`server is running at http://localhost:${port}`);
});
