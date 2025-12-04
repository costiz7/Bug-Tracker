import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB, sequelize } from './database/db.js';
import './models/associations.js'
import authRoutes from './routes/authRoutes.js';
import projectRoutes from './routes/projectRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

//We use CORS middleware so we can connect with our frontend
app.use(cors());

//We use .json() so we can send json easier
app.use(express.json());

//middleware for our authentication routes
app.use('/api/auth', authRoutes);

//middleware for our Project routes
app.use('/api/projects', projectRoutes);

//Testing to see if our app works
app.get('/', (req, res) => {
    res.send('Bug Tracker API running... ');
});

const start = async () => {
    await connectDB(); //We connect the database with our server

    await sequelize.sync({ alter: true }); //It alters the existing tables in our database so they can match with our models
    console.log('All models synced.');

    app.listen(PORT, () => console.log('Server running on port 3000'));
};

//Starts the server and connects to our database
start();