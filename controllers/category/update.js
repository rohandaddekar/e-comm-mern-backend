import customValidationError from "../../utils/customValidationError.js";
import fileUploadHandler from "../../utils/fileUploadHandler.js";
import Category from "../../models/Category.js";

const validateCategoryData = (data) => {
  return customValidationError(data, ["name"]);
};

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

    const data = {
      name: req.body.name,
    };

    const validationErrors = validateCategoryData(data);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        errors: validationErrors,
      });
    }

    category.name = req.body.name;

    if (req.file) {
      const cldRes = await fileUploadHandler(req.file);
      category.icon = cldRes.secure_url;
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
