import { body } from "express-validator";

const storeCategoryValidation = [
  body("name").notEmpty().withMessage("name is required"),
];

export default storeCategoryValidation;
