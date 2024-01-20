import Address from "../../models/address.js";

const show = async (req, res) => {
  try {
    const { id } = req.params;

    const address = await Address.findById(id).populate("userId");
    if (!address) {
      return res.status(404).json({
        success: false,
        message: "address not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "address fetched successfully",
      address,
    });
  } catch (error) {
    console.log("error in fetching address", error);
    return res.status(500).json({
      success: false,
      message: "error in fetching address",
    });
  }
};

export default show;
