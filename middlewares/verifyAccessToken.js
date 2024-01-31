import jwt from "jsonwebtoken";
import User from "../models/user.js";

const verifyAccessToken = async (req, res, next) => {
  try {
    // Get the token from the Authorization header
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: Token is missing",
      });
    }

    const token = authorizationHeader.split(" ")[1];

    // Verify the token
    const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);

    const userExists = await User.findById(verifiedUser.userId);
    if (!userExists) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: User not found",
      });
    }

    req.user = verifiedUser;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: Invalid token",
    });
  }
};

export default verifyAccessToken;
