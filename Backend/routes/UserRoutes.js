const {registerUser,authUser,updateUserProfile,logoutUser} = require('../controllers/UserController')

const express = require('express');


const router= express.Router();

const {protect} = require("../middleware/authMiddleware");

router.route("/register").post(registerUser);
router.post("/login", authUser);
router.put("/profile", protect, updateUserProfile);
router.route("/logout").post(logoutUser);

module.exports=router;