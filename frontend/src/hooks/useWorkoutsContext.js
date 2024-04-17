import { WorkoutsContext } from "../context/workoutContex.jsx";
import { useContext } from "react";

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);
  if (!context) {
    throw Error("useWorkouts must be used inside an WorkoutsContextProvider");
  }
  console.log(context);
  return context;
};
