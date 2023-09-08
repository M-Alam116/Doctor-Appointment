import express from "express";
import {
  updateDoctor,
  deleteDoctor,
  getAllDoctors,
  getSingleDoctor,
} from "../Controllers/doctorController.js";

const router = express.Router();

// Doctor routes
router.get("/:id", getSingleDoctor);
router.get("/", getAllDoctors);
router.put("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);

export default router;