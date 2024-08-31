import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/userModel.js';
import dotenv from 'dotenv';

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
        message: 'Invalid email or password',
        error: true,
        success: false
      });
    }

    // Compare the provided password with the hashed password
    const validPassword = await bcryptjs.compare(password, validUser.password);
    if (!validPassword) {
      return res.status(401).json({
        message: 'Invalid password',
        error: true,
        success: false
      });
    }

    // Create JWT token
   
    const jwtToken = jwt.sign(
      { id: validUser._id },
      process.env.JWT_SECRET_kEY,
      { expiresIn: '30d' } // Set token expiration
    );
    console.log("jwt token ",process.env.JWT_SECRET_kEY)
    
    // Set cookie and send response
    res.cookie('access_token', jwtToken, { httpOnly: true, secure: process.env.NODE_ENV === 'production' }) // Use secure flag in production
      .status(200)
      .json({
        success: true,
        error: false,
        token: jwtToken,
        message: 'User signed in successfully'
      });

  } catch (error) {
    console.error('Error:', error); // Log error for debugging
    res.status(500).json({
      message: 'Server error',
      error: true,
      success: false
    });
  }
};

export { userSingin };
