const onlyAdminAccess = (req, res, next) => {
  try {
    const user = req.user;
    const isAdmin = user.role === "admin";

    if (!isAdmin) {
      return res.status(401).json({
        success: false,
        message: "only admin can access",
      });
    }

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "only admin can access",
    });
  }
};

export default onlyAdminAccess;
