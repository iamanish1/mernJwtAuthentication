import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";
import dotenv from "dotenv";

dotenv.config(); // Ensure environment variables are loaded

const userSingin = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  try {
    // Find user by email
    const validUser = await User.findOne({ email });
    console.log("User:", validUser);

    if (!validUser) {
      return res.status(401).json({
        message: "Invalid email or password",
        error: true,
        success: false,
      });
    }

    // Compare the provided password with the hashed password
    const validPassword = await bcryptjs.compare(password, validUser.password);
    if (!validPassword) {
      return res.status(401).json({
        message: "Invalid password",
        error: true,
        success: false,
      });
    }

    // Create JWT token

    const jwtToken = jwt.sign(
      { id: validUser._id },
      process.env.JWT_SECRET_kEY,
      { expiresIn: "30d" } // Set token expiration
    );
    console.log("jwt token ", process.env.JWT_SECRET_kEY);

    // Set cookie and send response
    res
      .cookie("access_token", jwtToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      }) // Use secure flag in production
      .status(200)
      .json({
        success: true,
        error: false,
        token: jwtToken,
        message: "User signed in successfully",
      });
  } catch (error) {
    console.error("Error:", error); // Log error for debugging
    res.status(500).json({
      message: "Server error",
      error: true,
      success: false,
    });
  }
};

// Google Singin

const userGoogleSignin = async (req, res) => {
  try {
    // Find the user by email
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      // If the user exists, create a JWT token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "30d",
      });

      // Remove password from user object before sending the response
      const { password: hashedPassword, ...rest } = user.toObject();

      // Set the cookie and send response
      res.cookie("access_token", token, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
      });

      return res.status(200).json({
        message: "User signed in successfully",
        error: false,
        success: true,
        user: rest,
        token,
      });
    } else {
      // If user does not exist, create a new user
      const generatedPassword = Math.random().toString(36).slice(-6) + 
                                Math.random().toString(36).slice(-6);
      const hashedPassword = await bcryptjs.hash(generatedPassword, 10);
      const newUser = new User({
        username: req.body.name.split(" ").join("").toLowerCase() +
                  Math.floor( Math.random().toString(36).slice(-6)),
        email: req.body.email,
        password: hashedPassword,
        profilePicture: req.body.photo
      });
     
      
      await newUser.save();

      // Create a JWT token for the new user
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "30d",
      });

      // Remove password from newUser object before sending the response
      const { password: newUserHashedPassword, ...rest } = newUser.toObject();

      // Set the cookie and send response
      res.cookie("access_token", token, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
      });

      return res.status(200).json({
        message: "New user created and signed in successfully",
        error: false,
        success: true,
        user: rest,
        token,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
      error: true,
      success: false,
    });
  }
};


export { userSingin, userGoogleSignin};
 
