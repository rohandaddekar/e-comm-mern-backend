import Address from "../../models/address.js";

const defaultAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.user;

    const address = await Address.findById(id);
    if (!address) {
      return res.status(404).json({
        success: false,
        message: "address not found",
      });
    }

    if (address.isDefault) {
      return res
        .status(200)
        .json({ success: true, message: "Address is already the default" });
    }

    const currentDefaultAddress = await Address.findOne({
      userId,
      isDefault: true,
    });

    if (currentDefaultAddress) {
      currentDefaultAddress.isDefault = false;
      await currentDefaultAddress.save();
    }

    address.isDefault = true;
    await address.save();

    return res.status(200).json({
      success: true,
      message: "default address updated successfully",
    });
  } catch (error) {
    console.log("error in updating default address", error);
    return res.status(500).json({
      success: false,
      message: "error in updating default address",
    });
  }
};

export default defaultAddress;
