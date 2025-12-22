import express from "express";
import jwtCheck from "./../midddlewares/jwt-check.js";
const router = express.Router();

router.post("/", jwtCheck, accessChat);

router.get("/", jwtCheck, fetchChat);

router.post("/group", jwtCheck, createGroupChat);

router.put("/rename", jwtCheck, renameGroup);

router.put("/addgroup", jwtCheck, addToGroup);

router.put("/removegroup", jwtCheck, removeFromChat);

export default router;
