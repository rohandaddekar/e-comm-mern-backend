import Category from "../../models/Category.js";

const validateCategoryData = (data) => {
  const errors = [];

  if (!data.icon) {
    errors.push({ path: "icon", msg: "icon is required" });
  }

  return errors;
};

const uploadIcon = async (req, res) => {
  try {
    const data = {
      icon: req.file,
    };

    const validationErrors = validateCategoryData(data);
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        errors: validationErrors,
      });
    }

    if (req.file) {
      const cldRes = await fileUploadHandler(req.file);
      data.icon = cldRes.secure_url;
    }

    const category = await Category.create({
      name,
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

export default uploadIcon;
