import express from "express";
import dotenv from "dotenv";
import routes from "./routes/Postroutes.js";
import UserRoutes from "./routes/UserRoutes.js";

import mongoose from "mongoose";
dotenv.config();

const app = express();
const Port = process.env.PORT || 3000;
async function dataBase() {
  mongoose.connect(process.env.URL);
  {
    useNewUrlParser: true;
  }
  console.log("connected to DB");
}
dataBase().catch((err) => console.log(err));

// Middleware
app.use(express.json());
app.use("/post", routes);
app.use("/user", UserRoutes);

// Routes
// app.get("/", (req, res) => {
//   res.send("<h1>We are on Home</h1>");
// });

// app.get("/posts", (req, res) => {
//   res.send("We are on post");
// });

app.listen(Port, () => {
  console.log(`welcome to Port:${Port}`);
});
