const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true, min: 1 },
    },
  ],
});

CartSchema.methods.calculateTotalPrice = async function() {
  
  await this.populate('items.product');

  let totalPrice = 0;

  for (let item of this.items) {
    totalPrice += item.product.price * item.quantity;
  }

  return totalPrice;
};



const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
