import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = Schema({
  name: {
    firstname: String,
    lastname: String,
  },
  address: {
    street: String,
    city: String,
    zip: Number,
    loction: String,
  },
});

const User = model("User", userSchema);
export default User;
