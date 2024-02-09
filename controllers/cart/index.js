import Cart from "../../models/cart.js";
import CartItem from "../../models/cartItem.js";

const index = async (req, res) => {
  try {
    const { cartId } = req.params;

    const cart = await Cart.findById(cartId);
    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "cart not found",
      });
    }

    const items = await CartItem.find({ cartId }).populate("productId");

    return res.status(200).json({
      success: false,
      message: "all cart items fetched successfully",
      items,
    });
  } catch (error) {
    console.log("error in fetching cart items", error);
    return res.status(500).json({
      success: false,
      message: "error in fetching cart items",
    });
  }
};

export default index;
