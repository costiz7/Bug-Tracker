import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db.js";

class Project extends Model {};

Project.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        repositoryURL: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isUrl: true,
            }
        },
    },
    {
        sequelize,
        modelName: 'Project',
        tableName: 'Projects',
        indexes: [
            {
                unique: true,
                fields: ['repositoryURL'],
            }
        ]
    }
);

export default Project;