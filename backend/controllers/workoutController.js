import Workouts from "../model/WorkOutSchema.js";

// GET all Workouts
const getAllWorkouts = async (req, res) => {
  try {
    const workout = await Workouts.find({});
    res.send(workout);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

// Create Neu Workout
const createWorkout = async (req, res) => {
  // let emptyFields = [];
  // if (!title) {
  //   emptyFields.push("title");
  // }
  // if (!load) {
  //   emptyFields.push("load");
  // }
  // if (!reps) {
  //   emptyFields.push("reps");
  // }
  // if (emptyFields.length > 0) {
  //   return res
  //     .status(400)
  //     .json({ error: "Place fill in all the fields", emptyFields });
  // }
  try {
    const { title, reps, load } = req.body;
    const workouts = await Workouts.create({
      title: title,
      reps: reps,
      load: load,
    });
    // res.status(200).json(workouts);
    res.send(workouts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete All Workouts
const deleteAllWorkout = async (req, res) => {
  try {
    const workout = await Workouts.deleteMany({});
    res.send(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET a Single Workout
const GetASingleWorkout = async (req, res) => {
  const workoutID = req.params.id;
  try {
    const workout = await Workouts.findById(workoutID);
    res.send(workout);
  } catch (error) {
    res.status(400).json({ error: "i can Not Find An Workout" });
  }
};

// Delete a Single Workout
const deleteAWorkout = async (req, res) => {
  try {
    const workoutID = req.params.id;
    const workout = await Workouts.findByIdAndDelete(workoutID);
    res.send(workout);
  } catch (error) {
    res.status(400).json({ error: "No such workout" });
  }
};

// Update a Single Workout
const updateAWorkout = async (req, res) => {
  try {
    const workoutID = req.params.id;
    const { title, reps, load } = req.body;
    const workout = await Workouts.findByIdAndUpdate(workoutID, {
      title: title,
      reps: reps,
      load: load,
    });
    res.send(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export {
  getAllWorkouts,
  createWorkout,
  deleteAllWorkout,
  GetASingleWorkout,
  deleteAWorkout,
  updateAWorkout,
};
