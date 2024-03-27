import express from "express";
import Post from "../models/Post.js";
import bodyParser from "body-parser";

const routes = express();

// routes.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );
routes.use(bodyParser.json());
// routes.use(express.static("public"));
routes.route("/").post(async (req, res) => {
  const newPost = await Post.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    company: {
      name: req.body.company.name,
      location: req.body.company.location,
    },
  });
  const result = newPost;
  try {
    const response = {
      firstName: result.firstName,
      lastName: result.lastName,
      address: result.address,
      company: { name: result.company.name, location: result.company.location },
    };
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

export default routes;
