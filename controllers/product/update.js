import Category from "../../models/Category.js";

const update = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({
        success: false,
        message: "category not found",
      });
    }

    const { name, icon } = req.body;

    category.name = name;

    if (icon) {
      category.icon = icon;
    }

    await category.save();

    return res.status(200).json({
      success: true,
      message: "category updated successfully",
    });
  } catch (error) {
    console.log("error in updating category", error);
    return res.status(500).json({
      success: false,
      message: "error in updating category",
    });
  }
};

export default update;
