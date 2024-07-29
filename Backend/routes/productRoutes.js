const {getProduct,getProductByCategory,getsize,getOneProduct}= require('../controllers/productcontroller')
const express = require('express');


const router= express.Router();
const {protect} =  require("../middleware/authMiddleware");

// router.route("/").get(protect, getNotes);
// router.route("/:id").put(protect, UpdateNote);
// router.route("/:id").delete(protect, DeleteNote);
// router.route("/create").post(protect,CreateNote);

router.route("/").get(getProduct);


router.route("/:id").get(getOneProduct);

router.route("/category/:category").get(getProductByCategory);

router.route("/size/:id").post(protect,getsize);





module.exports=router;