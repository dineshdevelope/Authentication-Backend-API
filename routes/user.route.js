import express from "express";
import {
  createUser,
  deleteUser,
  editUser,
  getUser,
  singleUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getUser);

router.get("/:id", singleUser);

router.post("/", createUser);

router.put("/:id", editUser);

router.delete("/:id", deleteUser);

export default router;
