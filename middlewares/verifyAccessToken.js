import jwt from "jsonwebtoken";

const verifyAccessToken = (req, res, next) => {
  try {
    // get token from cookie
    const token = req.cookies.accessToken;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "unauthorized",
      });
    }

    // verify token
    const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verifiedUser;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "unauthorized",
    });
  }
};

export default verifyAccessToken;
