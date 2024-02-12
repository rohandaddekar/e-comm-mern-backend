import Cart from "../../models/cart.js";
import CartItem from "../../models/cartItem.js";

const clearCart = async (req, res) => {
  try {
    const { cartId } = req.params;

    const cart = await Cart.findById(cartId);
    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "cart not found",
      });
    }

    await CartItem.deleteMany({ cartId });

    return res.status(200).json({
      success: true,
      message: "cart cleared successfully",
    });
  } catch (error) {
    console.log("failed to remove item from cart", error);
    return res.status(500).json({
      success: false,
      message: "failed to clear cart",
    });
  }
};

export default clearCart;
