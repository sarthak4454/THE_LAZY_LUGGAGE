const express = require('express');
const { imageUpload } = require('../controllers/filecontroller'); 

const router = express.Router();

router.post('/imageupload', imageUpload); 
module.exports = router;
