import Category from "../../models/Category.js";

const show = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({
        success: false,
        message: "category not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "category fetched successfully",
      category,
    });
  } catch (error) {
    console.log("failed to fetch category", error);
    return res.status(500).json({
      success: false,
      message: "failed to fetch category",
    });
  }
};

export default show;
