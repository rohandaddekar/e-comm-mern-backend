import { body } from "express-validator";

const storeAddressValidation = [
  body("street").notEmpty().withMessage("street is required"),
  body("city").notEmpty().withMessage("city is required"),
  body("state").notEmpty().withMessage("state is required"),
  body("country").notEmpty().withMessage("country is required"),
  body("pincode")
    .notEmpty()
    .withMessage("pincode is required")
    .isNumeric()
    .withMessage("pincode must be a number"),
];

export default storeAddressValidation;
