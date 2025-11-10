import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

//This is how we define the model for the User table
export const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password_hash: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    avatar_url: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    }, 
}, { timestamps: true });
//Timestamps - automatically adds 'createdAt' and 'updatedAt' columns for each user