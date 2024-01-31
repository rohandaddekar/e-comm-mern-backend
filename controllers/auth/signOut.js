const signOut = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "user sign out successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "failed to sign out",
    });
  }
};

export default signOut;
