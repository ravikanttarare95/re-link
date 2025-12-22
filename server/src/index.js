import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./configs/db.js";

import userRouter from "./routes/userRoutes.js";
import imagekitRouter from "./routes/imagekitRoutes.js";
import chatRouter from "./routes/chatRoutes.js";

import jwtCheck from "./midddlewares/jwt-check.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.json({ success: true, status: "OK", message: "Server is healthy." });
});

app.use("/api/users", userRouter);
app.use("/api/imagekit", imagekitRouter);
app.use("/chats", jwtCheck, chatRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`\n📞 Server is listening on port ${PORT}`);
  connectDB();
});
