import User from "../../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const signIn = async (req, res) => {
  try {
    // destructure data given by user
    const { email, password } = req.body;

    // Check if the user exists
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({
        success: false,
        message: "invalid credentials",
      });
    }

    // match user password
    const isPasswordMatch = await bcrypt.compare(password, userExist.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "invalid credentials",
      });
    }

    // generate access token
    const token = jwt.sign(
      { userId: userExist._id, role: userExist.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Send a success response
    return res.status(200).json({
      success: true,
      message: "user sign in successfully",
      role: userExist.role,
      token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "failed to sign in",
    });
  }
};

export default signIn;
