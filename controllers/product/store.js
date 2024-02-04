import customValidationError from "../../utils/customValidationError.js";
import fileUploadHandler from "../../utils/fileUploadHandler.js";
import Product from "../../models/Product.js";

const validateData = (data) => {
  const requiredFields = ["categoryId", "name", "price", "stock"];

  const validationErrors = customValidationError(data, requiredFields);

  return validationErrors;
};

const store = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      stock: req.body.stock,
      price: req.body.price,
      categoryId: req.body.categoryId,
      discountPercentage: req.body.discountPercentage,
    };

    const validationErrors = validateData(data);
    if (!req.files || req.files.length === 0) {
      validationErrors.push({
        path: "images",
        msg: "images are required.",
      });
    }
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        errors: validationErrors,
      });
    }

    if (req.files && req.files.length > 0) {
      const imageUrls = [];

      for (const file of req.files) {
        const cldRes = await fileUploadHandler(file);
        imageUrls.push(cldRes.secure_url);
      }

      data.images = imageUrls;
    }

    const product = await Product.create(data);

    return res.status(200).json({
      success: true,
      message: "product created successfully",
      product,
    });
  } catch (error) {
    console.log("error in creating product", error);
    return res.status(500).json({
      success: false,
      message: "error in creating product",
    });
  }
};

export default store;
