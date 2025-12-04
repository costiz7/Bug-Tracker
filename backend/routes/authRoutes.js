import express from 'express';
import { register, login } from '../controllers/authController.js'; //Import our auth controllers

const router = express.Router(); //Declare an express router

router.post('/register', register); //When someone sends a '/register' request we call our register controller
router.post('/login', login); //When someone sends a '/login' request we call our login controller

export default router;