import express from 'express';
import { testPinCodes } from '../controllers/deliverycontroller.js';

const router = express.Router();

router.get('/testpincodes', testPinCodes);

export default router;
