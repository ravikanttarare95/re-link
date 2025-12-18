import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      required: true,
      default: "https://ik.imagekit.io/vby7pddwy/my-photo_Wcc37_l6h.png",
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
