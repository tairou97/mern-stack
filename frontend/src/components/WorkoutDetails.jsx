import React from "react";
import axios from "axios";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.delete(
        "http://localhost:8000/api/workouts/" + workout._id
      );

      dispatch({ type: "DELETE_WORKOUTS", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div key={workout._id} className="workout-details  ">
      <h4>{workout.title}</h4>

      <p>
        <strong>Load (kg): </strong> {workout.load}
      </p>
      <p>
        <strong>Reps: </strong> {workout.reps}
      </p>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSufix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        Delete
      </span>
    </div>
  );
};

export default WorkoutDetails;
