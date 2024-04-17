import express from "express";
import dotenv from "dotenv";
import workouts from "./routes/workouts.js";
import mongoose from "mongoose";
import cors from "cors";
dotenv.config();
const app = express();
app.use(cors());
app.use("/api/workouts", workouts);
const PORT = process.env.PORT || 4000;

async function mernData() {
  mongoose.connect(process.env.URL);
  console.log("MERN DataBase is Connected");
}
mernData().catch((err) => {
  console.log(err);
});
console.log(mernData);

app.use(express.json());
// app.use((req, res, next) => {
//   console.log(req.path, req.method);
//   next();
// });

app.listen(PORT, () => {
  console.log(`Connected to Port: ${PORT}`);
});
