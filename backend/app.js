import express from 'express';
import 'dotenv/config';
import { connectDB, sequelize } from './database/db.js';
import { User } from './models/User.js';

const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bug Tracker API running... ');
});

const start = async () => {
    await connectDB();

    await sequelize.sync({ alter: true });
    console.log('All models synced.');

    app.listen(PORT, () => console.log('Server running on port 3000'));
};

start();