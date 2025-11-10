import express from 'express';
import 'dotenv/config';
import { connectDB, sequelize } from './database/db.js';
import { User } from './models/User.js'; //We import these so they can be created when we sync

const app = express();
const PORT = process.env.PORT;
app.use(express.json());

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