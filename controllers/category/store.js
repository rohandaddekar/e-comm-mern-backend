import Category from "../../models/Category.js";

const store = async (req, res) => {
  try {
    const { name, icon } = req.body;

    const category = await Category.create({
      name,
      icon,
    });

    return res.status(200).json({
      success: true,
      message: "category created successfully",
      category,
    });
  } catch (error) {
    console.log("error in creating category", error);
    return res.status(500).json({
      success: false,
      message: "error in creating category",
    });
  }
};

export default store;
