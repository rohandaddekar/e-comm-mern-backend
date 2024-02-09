import Cart from "../../models/cart.js";
import CartItem from "../../models/cartItem.js";

const store = async (req, res) => {
  try {
    const { cartId, productId, quantity } = req.body;

    const cart = await Cart.findById(cartId);
    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "cart not found",
      });
    }

    let cartItem = await CartItem.findOne({ productId, cartId });

    if (cartItem) {
      cartItem.quantity = quantity;
      await cartItem.save();
    } else {
      cartItem = await CartItem.create({ cartId, productId, quantity });
    }

    return res.status(201).json({
      success: true,
      message: "Item added to cart successfully",
      cartItem,
    });
  } catch (error) {
    console.log("failed to add item in cart", error);
    return res.status(500).json({
      success: false,
      message: "failed to add item in cart",
    });
  }
};

export default store;
