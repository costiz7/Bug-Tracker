import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db.js";

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
            },
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        avatar: DataTypes.STRING,
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'Users',
        timestamps: true,
        indexes: [
            {
                unique: true,
                fields: ['username'],
            },
            {
                unique: true,
                fields: ['email'],
            }
        ],
    }
)


export default User;