import { body } from "express-validator";

const storeAddressValidation = [
  body("firstName").notEmpty().withMessage("first name is required"),
  body("lastName").notEmpty().withMessage("last name is required"),
  body("street").notEmpty().withMessage("street is required"),
  body("city").notEmpty().withMessage("city is required"),
  body("state").notEmpty().withMessage("state is required"),
  body("country").notEmpty().withMessage("country is required"),
  body("pincode")
    .notEmpty()
    .withMessage("pincode is required")
    .isNumeric()
    .withMessage("pincode must be a number"),
  body("mobile")
    .notEmpty()
    .withMessage("mobile is required")
    .isNumeric()
    .withMessage("mobile must be a number"),
];

export default storeAddressValidation;
