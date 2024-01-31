import Product from "../../models/Product.js";

const destroy = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "product not found",
      });
    }

    await product.deleteOne();

    return res.status(200).json({
      success: true,
      message: "product deleted successfully",
    });
  } catch (error) {
    console.log("error in deleting product", error);
    return res.status(500).json({
      success: false,
      message: "error in deleting product",
    });
  }
};

export default destroy;
