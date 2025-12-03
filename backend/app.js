import express from 'express';
import 'dotenv/config';
import { connectDB, sequelize } from './database/db.js';
import './models/associations.js'
import authRoutes from './routes/authRoutes.js';
import projectRoutes from './routes/projectRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);

app.get('/', (req, res) => {
    res.send('Bug Tracker API running... ');
});

const start = async () => {
    await connectDB(); //We connect the database with our server

    await sequelize.sync({ alter: true }); //It alters the existing tables in our database so they can match with our models
    console.log('All models synced.');

    app.listen(PORT, () => console.log('Server running on port 3000'));
};

start();