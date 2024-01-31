import Category from "../../models/Category.js";

const destroy = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({
        success: false,
        message: "category not found",
      });
    }

    await category.deleteOne();

    return res.status(200).json({
      success: true,
      message: "category deleted successfully",
    });
  } catch (error) {
    console.log("error in deleting category", error);
    return res.status(500).json({
      success: false,
      message: "error in deleting category",
    });
  }
};

export default destroy;
