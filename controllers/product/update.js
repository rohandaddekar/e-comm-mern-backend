import Product from "../../models/Product.js";

const update = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "product not found",
      });
    }

    const { name, icon } = req.body;

    product.name = name;

    if (icon) {
      product.icon = icon;
    }

    await product.save();

    return res.status(200).json({
      success: true,
      message: "product updated successfully",
    });
  } catch (error) {
    console.log("error in updating product", error);
    return res.status(500).json({
      success: false,
      message: "error in updating product",
    });
  }
};

export default update;
