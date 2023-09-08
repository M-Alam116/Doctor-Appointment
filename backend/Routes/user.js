import express from "express";
import {
  updateUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
} from "../Controllers/userController.js";

const router = express.Router();

// User routes
router.get("/:id", getSingleUser);
router.get("/", getAllUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;