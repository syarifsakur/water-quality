import express from 'express';
import validateData from '../middlewares/Validation.js';
import verifyToken from '../middlewares/verifyToken.js';
import { waterQualitySchema } from '../validation/SchemaWaterQuality.js';
import {
  createWaterQuality,
  getWaterQuality,
} from '../controllers/waterQuality.js';

const router = express.Router();

router.get('/', getWaterQuality);
router.post(
  '/create',
  verifyToken,
  validateData(waterQualitySchema),
  createWaterQuality
);

export default router;
