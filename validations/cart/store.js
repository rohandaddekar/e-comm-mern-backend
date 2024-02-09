import { body } from "express-validator";

const addCartItemValidation = [
  body("cartId").notEmpty().withMessage("cart id is required"),
  body("productId").notEmpty().withMessage("product id is required"),
  body("quantity")
    .notEmpty()
    .withMessage("quantity is required")
    .isNumeric()
    .withMessage("quantity must be a number"),
];

export default addCartItemValidation;
