import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";

const userAuthentication = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Check if the username already exists
    const existingUser = await User.findOne({ email});
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "email already exists." });
    }
    console.log("user exsist");

    const hasPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({
      username : username,
      email : email,
      password: hasPassword,
    });
    await newUser.save();

    res.status(200).json({
      message: "Success",
      error: false,
      super: true,
    });
  } catch (error) {
    if (error.code === 11000) {
      // Catch duplicate key error
      return res
        .status(400)
        .json({ success: false, message: "Username already exists." });
    }
    res.json({
      message: error.message,
      error: true,
      success: false,
    });
  }
  // console.log(req.body);
  
};

export { userAuthentication };
