import express from "express";
import jwtCheck from "./../midddlewares/jwt-check.js";
import {
  accessChat,
  fetchChat,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromChat,
} from "./../controllers/chatControllers.js";

const router = express.Router();

router.post("/", accessChat);

router.get("/", fetchChat);

router.post("/group", createGroupChat);

router.put("/rename", renameGroup);

router.put("/addgroup", addToGroup);

router.put("/removegroup", removeFromChat);

export default router;
