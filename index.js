import DbConnection from "./utils/DbConnection.js";
import cookieParser from "cookie-parser";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import apiRoutes from "./routes/index.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
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
