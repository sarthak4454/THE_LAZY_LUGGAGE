const Cart = require('../models/cartModel');
const Product = require('../models/productModel');
const User = require('../models/userModel');

const addToCart = async (req, res) => {
    const { userId, productId, quantity } = req.body;
  
    try {
      let cart = await Cart.findOne({ user: userId });
  
      if (!cart) {
        cart = new Cart({ user: userId, items: [] });
      }
  
      const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
  
      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        const product = await Product.findById(productId);
        if (!product) {
          return res.status(404).send({ message: 'Product not found' });
        }
        cart.items.push({ product: productId, quantity });
      }
  
      await cart.save();
  
      const totalPrice = await cart.calculateTotalPrice();
  
      res.status(200).send({ cart, totalPrice });
    } catch (err) {
      console.error('Error in addToCart:', err);
      res.status(500).send({ error: err.message });
    }
  };
  

const removeFromCart = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).send({ message: 'Cart not found' });
    }

    cart.items = cart.items.filter(item => item.product.toString() !== productId);

    await cart.save();

    const totalPrice = await cart.calculateTotalPrice();

    res.status(200).send({ cart, totalPrice });
  } catch (err) {
    console.error('Error in removeFromCart:', err);
    res.status(500).send({ error: err.message });
  }
};

module.exports = {
  addToCart,
  removeFromCart
};
