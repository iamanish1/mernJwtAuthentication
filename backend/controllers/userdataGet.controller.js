import { User } from "../models/userModel.js";
const userDataGet = async (req, res) => {
  try {
    User.find().then((val) => {
      res.json(val);
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { userDataGet };
