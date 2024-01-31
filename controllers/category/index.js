import Category from "../../models/Category.js";

const index = async (req, res) => {
  try {
    const { name, sortBy = "created_at", sortOrder = "asc" } = req.query;

    const filters = {};

    if (name) {
      filters.name = { $regex: new RegExp(`${name}`, "i") };
    }

    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === "desc" ? -1 : 1;

    const categories = await Category.find(filters).sort(sortOptions);

    return res.status(200).json({
      success: true,
      message: "fetched all categories successfully",
      categories,
    });
  } catch (error) {
    console.log("failed to fetch all categories", error);
    return res.status(500).json({
      success: false,
      message: "failed to fetch all categories",
    });
  }
};

export default index;
