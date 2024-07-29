import mongoose from "mongoose";
const ProductSchema = mongoose.Schema(
  {
    addressline1: {
      type: String,
      required: true,
    },
    addressline2: {
      type: String,
      required: false,
    },
     pincode: {
      type: Number,
      required: true,
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