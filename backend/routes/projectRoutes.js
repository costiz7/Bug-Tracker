import express from 'express';
import { createProject, getProjects } from '../controllers/projectControllers.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createProtect);
router.get('/', protect, getProjects);

export default router;