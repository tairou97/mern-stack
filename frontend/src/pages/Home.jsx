import { useEffect } from "react";
import axios from "axios";
import WorkoutDetails from "../components/WorkoutDetails.jsx";
import WorkoutForm from "../components/WorkoutsForm.jsx";

import { useWorkoutsContext } from "../hooks/useWorkoutsContext.js";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/workouts");
        dispatch({ type: "SET_WORKOUTS", payload: res.data });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDate();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {" "}
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
