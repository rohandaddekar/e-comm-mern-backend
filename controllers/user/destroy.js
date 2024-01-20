import User from "../../models/user.js";

const destroy = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    await user.deleteOne();

    return res.status(200).json({
      success: true,
      message: "user deleted successfully",
    });
  } catch (error) {
    console.log("error in deleting user", error);
    return res.status(500).json({
      success: false,
      message: "error in deleting user",
    });
  }
};

export default destroy;
