import User from "../../models/user.js";

const show = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "fetched user successfully",
      user,
    });
  } catch (error) {
    console.log("failed to fecth user", error);
    return res.status(500).json({
      success: false,
      message: "failed to fetch user",
    });
  }
};

export default show;
