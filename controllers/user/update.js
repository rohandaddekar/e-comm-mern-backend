import User from "../../models/user.js";

const update = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }

    const { firstName, lastName, role } = req.body;

    user.firstName = firstName;
    user.lastName = lastName;
    user.role = role;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "user updated successfully",
    });
  } catch (error) {
    console.log("error in updating user", error);
    return res.status(500).json({
      success: false,
      message: "error in updating user",
    });
  }
};

export default update;
