import Address from "../../models/address.js";

const index = async (req, res) => {
  try {
    const addresses = await Address.find({ userId: req.user.userId }).populate(
      "userId"
    );

    return res.status(200).json({
      success: true,
      message: "all addresses fetched successfully",
      addresses,
    });
  } catch (error) {
    console.log("error in fetching all addresses", error);
    return res.status(500).json({
      success: false,
      message: "error in fetching all addresses",
    });
  }
};

export default index;
