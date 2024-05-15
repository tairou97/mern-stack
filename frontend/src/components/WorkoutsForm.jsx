import React, { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext.js";
import axios from "axios";

const WorkoutsForm = () => {
  const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");

  console.log(title, load, reps);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps };
    try {
      const res = await axios.post(
        "http://localhost:8000/api/workouts",
        workout
      );

      dispatch({ type: "CREATE_WORKOUTS", payload: res.data });
      setTitle("");
      setLoad("");
      setReps("");
    } catch (error) {
      console.log(error);
      setError("Error occurred while adding workout.");
    }
  };

  return (
    <div className="">
      <form className="create  p-5   " onSubmit={handleSubmit}>
        <h3 className="font-bold text-center mb-5 text-xl text-emerald-500">
          Add a New Workout
        </h3>
        <label htmlFor=""> Excersize Title:</label>
        <input
          className=""
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder=" Add Title"
        />
        <label htmlFor=""> Load (in kg):</label>
        <input
          type="number"
          value={load}
          onChange={(e) => setLoad(e.target.value)}
          placeholder=" Add Load"
        />
        <label htmlFor=""> Reps:</label>
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          placeholder=" Add Reps"
        />
        <button type="submit">Add Workout</button>
        {error && <div className="error"> {error}</div>}
      </form>
    </div>
  );
};

export default WorkoutsForm;
