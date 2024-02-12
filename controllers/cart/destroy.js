import CartItem from "../../models/cartItem.js";

const destroy = async (req, res) => {
  try {
    const { id } = req.params;

    const cartItem = await CartItem.findById(id);
    if (!cartItem) {
      return res.status(404).json({
        success: false,
        message: "cart item not found",
      });
    }

    await CartItem.deleteOne();

    return res.status(200).json({
      success: true,
      message: "cart item removed successfully",
    });
  } catch (error) {
    console.log("failed to remove item from cart", error);
    return res.status(500).json({
      success: false,
      message: "failed to remove item from cart",
    });
  }
};

export default destroy;
