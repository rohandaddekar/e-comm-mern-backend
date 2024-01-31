import fileUploadHandler from "../../utils/fileUploadHandler.js";
import Category from "../../models/Category.js";

const store = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
    };

    // file upload
    if (req.file) {
      const cldRes = await fileUploadHandler(req.file);

      data.icon = cldRes.secure_url;
    }

    const category = await Category.create(data);

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
