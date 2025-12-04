import express from 'express';
import { createProject, getProjects } from '../controllers/projectControllers.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

//When someone wants to create a project, we first look for who sends the request (protect), then we create the project (createProject)
router.post('/', protect, createProject);
//When someone wants to get all their projects, we first look for who sends the request (protect), then we return them their projects (getProjects)
router.get('/', protect, getProjects);

export default router;