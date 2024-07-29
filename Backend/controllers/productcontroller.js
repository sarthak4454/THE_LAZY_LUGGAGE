const Product= require('../models/productModel.js');
const asyncHandler = require('express-async-handler');

const getProduct = asyncHandler(async (req, res) => {
  try
  {
    const Products = await Product.find();
  res.json(Products);
  }
  catch(error)
  {
    return res.status(404);
  }
});

const getProductByCategory = asyncHandler(async (req, res) => {
  try {
    const category = req.params.category; 

    const products = await Product.find({ category });

    if (products.length === 0) {
      return res.status(404).json({ message: 'No products found for this category' });
    }

    
    res.json(products);

  } catch (error) {
    console.error('Error fetching products by category:', error);
    res.status(500).json({ message: 'Server error' });
  }
});
 
const getOneProduct = asyncHandler(async (req, res) => {
  try {
    const id = req.params._id; 

    const products = await Product.find({ id });

    

    
    res.json(products);

  } catch (error) {
    console.error('Error fetching products by category:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


// const getsize = asyncHandler((async(req,res)=>
// {
//   const { size } = req.body;
//   const { productId } = req.params._id;

//   try {
    
//     const product = await Product.findById(productId);

//     if (!product) {
//       return res.status(404);
//     }

    
//     if (product.user.toString() !== req.user._id.toString()) {
//       return res.status(403).json({ message: 'Not authorized to update this product' });
//     }

 
//     if (size) {
//       product.size = size;
//     }

   
//     product.updatedBy = req.user._id;

//   //  const  userid =  req.user._id;

    
//     const updatedProduct = await product.save();

//     res.status(201).json(updatedProduct);

   
//   } catch (error) {
//     console.error('Error updating product:', error);
//     res.status(500);
//   }
// }))

async function getsize(req, res) {
  const { size } = req.body;
  const productId = req.params.id; // Assuming this is the correct way

  try {
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // if (product.user.toString() !== req.user._id.toString()) {
    //   return res.status(401).json({ message: 'Not authorized to update this product' });
    // }

    if (size) {
      
      product.size = size;
    }

    product.updatedBy = req.user._id;

    const updatedProduct = await product.save();

    res.status(200).json(updatedProduct); // Use 200 for successful updates
  } catch (error) {
    console.error('Error updating product:', error);
    if (error.name === 'ValidationError') { // Handle validation errors specifically
      return res.status(400).json({ message: error.message });
    } else {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}


module.exports={ getProduct,getOneProduct,getProductByCategory,getsize};