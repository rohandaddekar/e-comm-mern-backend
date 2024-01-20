import Address from "../../models/address.js";

const update = async (req, res) => {
  try {
    const { id } = req.params;

    const address = await Address.findById(id);
    if (!address) {
      return res.status(404).json({
        success: false,
        message: "address not found",
      });
    }

    const { street, city, state, country, pincode } = req.body;

    address.street = street;
    address.city = city;
    address.state = state;
    address.country = country;
    address.pincode = pincode;
    await address.save();

    return res.status(200).json({
      success: true,
      message: "address updated successfully",
    });
  } catch (error) {
    console.log("error in updating address", error);
    return res.status(500).json({
      success: false,
      message: "error in updating address",
    });
  }
};

export default update;
