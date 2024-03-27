import express from "express";
const UserRoutes = express();
import User from "../models/User.js";
import bodyParser from "body-parser";

UserRoutes.use(bodyParser.json());

UserRoutes.route("/")
  .get(async (req, res) => {
    try {
      const result = await User.find({});
      res.send(result);
    } catch (e) {
      res.status(404).send(e);
    }
  })
  .post(async (req, res) => {
    const userPost = await User.create({
      name: {
        firstname: req.body.name.firstname,
        lastname: req.body.name.lastname,
      },
      address: {
        street: req.body.address.street,
        city: req.body.address.city,
        zip: req.body.address.zip,
        loction: req.body.address.loction,
      },
    });
    const result = userPost;
    try {
      const response = {
        name: {
          firstname: result.name.firstname,
          lastname: result.name.lastname,
        },
        address: {
          street: result.address.street,
          city: result.address.city,
          zip: result.address.zip,
          loction: result.address.loction,
        },
      };
      console.log(response);
      res.send(response);
    } catch (error) {
      res.send(error);
    }
  })
  .delete(async (req, res) => {
    try {
      const result = await User.deleteMany({});
      res.send(result);
    } catch (error) {
      res.send(error);
    }
  });

export default UserRoutes;
