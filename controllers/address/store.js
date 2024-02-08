import Address from "../../models/address.js";

const store = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      street,
      city,
      state,
      country,
      pincode,
      mobile,
      isDefault,
    } = req.body;

    const address = await Address.create({
      firstName,
      lastName,
      street,
      city,
      state,
      country,
      pincode,
      mobile,
      isDefault,
      userId: req.user.userId,
    });

    return res.status(201).json({
      success: true,
      message: "address created successfully",
      address,
    });
  } catch (error) {
    console.log("error in creating address", error);
    return res.status(500).json({
      success: false,
      message: "error in creating address",
    });
  }
};

export default store;
