import Product from "../../models/Product.js";

const index = async (req, res) => {
  try {
    const {
      name,
      categoryId,
      sortBy = "created_at",
      sortOrder = "asc",
    } = req.query;

    const filters = {};

    if (name) {
      filters.name = { $regex: new RegExp(`${name}`, "i") };
    }

    if (categoryId) {
      filters.categoryId = categoryId;
    }

    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === "desc" ? -1 : 1;

    const products = await Product.find(filters)
      .sort(sortOptions)
      .populate("categoryId", "name icon");

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
