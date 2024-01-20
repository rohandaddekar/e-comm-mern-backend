import { body } from "express-validator";

const userUpdateValidation = [
  body("firstName").notEmpty().withMessage("First name is required"),
  body("lastName").notEmpty().withMessage("Last name is required"),
];

export default userUpdateValidation;
