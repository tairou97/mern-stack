import mongoose from "mongoose";
const { Schema, model } = mongoose;

const workoutSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Workouts = model("Workouts", workoutSchema);
export default Workouts;
