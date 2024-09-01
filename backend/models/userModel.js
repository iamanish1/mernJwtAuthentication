import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: "string",
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: "string",
      required: true,
      unique: true,
    },
    profilePicture: {
      type: "string",
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export { User };
