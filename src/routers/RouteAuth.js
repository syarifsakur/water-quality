import express from 'express';
// import validateData from '../middlewares/validation.js';
import { Login } from '../controllers/auth.js';
// import { queueSchema } from '../validations/SchemaQueue.js';

const router = express.Router();

router.post('/login', Login);

export default router;
