import express from "express";
import {
  userRegister,
  userLogin,
  allUsers,
} from "./../controllers/userController.js";
import jwtCheck from "./../midddlewares/jwt-check.js";

const userRouter = express.Router();

userRouter.get("/search", jwtCheck, allUsers);
userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);

export default userRouter;
