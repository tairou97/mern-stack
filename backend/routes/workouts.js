import express from "express";

import {
  getAllWorkouts,
  createWorkout,
  deleteAllWorkout,
  GetASingleWorkout,
  deleteAWorkout,
  updateAWorkout,
} from "../controllers/workoutController.js";

import bodyParser from "body-parser";
const router = express.Router();
router.use(bodyParser.json());

router
  .get("/", getAllWorkouts)
  .post("/", createWorkout)
  .delete("/", deleteAllWorkout);

router
  .get("/:id", GetASingleWorkout)
  .delete("/:id", deleteAWorkout)
  .patch("/:id", updateAWorkout);

export default router;
