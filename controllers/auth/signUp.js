import User from "../../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const signUp = async (req, res) => {
  try {
    // destructure data given by user
    const { firstName, lastName, email, password } = req.body;

    // Check if the user already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({
        success: false,
        message: "user already exists",
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    // generate access token
    const token = jwt.sign(
      { userId: newUser._id, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Send a success response with set token in cookie
    return res
      .cookie("accessToken", token, {
        httpOnly: true,
        maxAge: 3600000, // 1 hr = 3600000 mili sec
      })
      .status(201)
      .json({
        success: true,
        message: "user sign up successfully",
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "failed to sign up",
    });
  }
};

export default signUp;
