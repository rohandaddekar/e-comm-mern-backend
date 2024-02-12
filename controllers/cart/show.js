import CartItem from "../../models/cartItem.js";

const show = async (req, res) => {
  try {
    const { productId } = req.params;

    const cartItem = await CartItem.findOne({ productId });

    return res.status(200).json({
      success: false,
      message: "cart item fetched successfully",
      item: cartItem,
    });
  } catch (error) {
    console.log("error in fetching cart item", error);
    return res.status(500).json({
      success: false,
      message: "error in fetching cart item",
    });
  }
};

export default show;
