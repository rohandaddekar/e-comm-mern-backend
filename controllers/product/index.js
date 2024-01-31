import Product from "../../models/Product.js";

const index = async (req, res) => {
  try {
    const products = await Product.find();

    return res.status(200).json({
      success: true,
      message: "fetched all products successfully",
      products,
    });
  } catch (error) {
    console.log("failed to fetch all products", error);
    return res.status(500).json({
      success: false,
      message: "failed to fetch all products",
    });
  }
};

export default index;
