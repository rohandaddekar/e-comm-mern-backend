import { v2 as cloudinary } from "cloudinary";

const fileUploadHandler = async (file) => {
  const b64 = Buffer.from(file.buffer).toString("base64");
  let imgURI = "data:" + file.mimetype + ";base64," + b64;

  const res = await cloudinary.uploader.upload(imgURI, {
    resource_type: "auto",
    folder: "e-comm-mern",
  });

  return res;
};

export default fileUploadHandler;
