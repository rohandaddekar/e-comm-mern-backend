import Product from "../../models/Product.js";

const show = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id).populate(
      "categoryId",
      "name icon"
    );
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "product not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "product fetched successfully",
      product,
    });
  } catch (error) {
    console.log("failed to fetch product", error);
    return res.status(500).json({
      success: false,
      message: "failed to fetch product",
    });
  }
};

export default show;
