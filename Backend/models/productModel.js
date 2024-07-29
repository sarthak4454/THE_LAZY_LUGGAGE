const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    size: {
      type: String,
      required: false,
    },

    price:
    {
      type:String,
      required:true
    },
    image: {
      type : String,
      
      required:true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required:false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
