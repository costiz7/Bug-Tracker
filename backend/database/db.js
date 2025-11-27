import { Sequelize } from "sequelize";

//Here, I delclared a Sequelize instance using its constructor
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: false, //Use this so no SQL syntax appears in the console
    }
);

//Testing the connection (will keep it on by default)
const connectDB = async () => {
    try {
        await sequelize.authenticate(); //Here we test
        console.log('Connected to MySQL successfully.');
    } catch (error) {
        console.log('Unable to connect to the database: ', error);
    }
};

export { sequelize, connectDB };