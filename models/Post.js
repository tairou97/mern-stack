import mongoose from "mongoose";

const { Schema, model } = mongoose;

const PostSchema = new Schema({
  firstName: String,
  lastName: String,
  address: String,
  company: {
    name: String,
    location: String,
  },
});

const Post = model("Post", PostSchema);
export default Post;
