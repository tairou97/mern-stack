import express from "express";
const userRoutes = express.Router();
import bodyParser from "body-parser";

import { loginUser, signupUser } from "../controllers/userController.js";
import { useActionData } from "react-router-dom";
userRoutes.use(bodyParser);
// Login Routes
userRoutes.post("/login", loginUser);
// Sign Up Routes

userRoutes.post("/signup", signupUser);
export default userRoutes;
