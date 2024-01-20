import Address from "../../models/address.js";

const destroy = async (req, res) => {
  try {
    const { id } = req.params;

    const address = await Address.findById(id);
    if (!address) {
      return res.status(404).json({
        success: false,
        message: "address not found",
      });
    }

    if (address.userId != req.user.userId) {
      return res.status(400).json({
        success: false,
        message: "only owner can delete address",
      });
    }

    await address.deleteOne();

    return res.status(200).json({
      success: true,
      message: "address deleted successfully",
    });
  } catch (error) {
    console.log("error in deleting address", error);
    return res.status(500).json({
      success: false,
      message: "error in deleting address",
    });
  }
};

export default destroy;
