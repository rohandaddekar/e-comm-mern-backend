import customValidationError from "../../utils/customValidationError.js";
import Product from "../../models/Product.js";
import fileUploadHandler from "../../utils/fileUploadHandler.js";

const validateData = (data) => {
  const requiredFields = ["categoryId", "name", "price", "stock"];
  const validationErrors = customValidationError(data, requiredFields);
  return validationErrors;
};

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

    const data = {
      name: req.body.name,
      stock: req.body.stock,
      price: req.body.price,
      categoryId: req.body.categoryId,
      discountPercentage: req.body.discountPercentage,
    };

    const validationErrors = validateData(data);
    if (
      (!req.files || req.files.length === 0) &&
      (!req.body.oldImages || req.body.oldImages.length === 0)
    ) {
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

    product.name = req.body.name;
    product.stock = req.body.stock;
    product.price = req.body.price;
    product.categoryId = req.body.categoryId;
    product.discountPercentage = req.body.discountPercentage;
    product.images = req.body.oldImages;

    if (req.files && req.files.length > 0) {
      const imageUrls = [];

      for (const file of req.files) {
        const cldRes = await fileUploadHandler(file);
        imageUrls.push(cldRes.secure_url);
      }

      product.images = [...req.body.oldImages, ...imageUrls];
    } else {
      product.images = req.body.oldImages;
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
