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
    userPhotoUrl: {
      type: String,
      default:
        "https://ik.imagekit.io/vby7pddwy/user_puMsmkK3A.png?updatedAt=1766154755494",
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
