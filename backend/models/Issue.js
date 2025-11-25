import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db.js";

class Issue extends Model {}

Issue.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        priority: {
            type: DataTypes.ENUM('LOW', 'MEDIUM', 'HIGH'),
            allowNull: false,
            defaultValue: 'MEDIUM',
        },
        status: {
            type: DataTypes.ENUM('TO DO', 'IN PROGRESS', 'DONE'),
            allowNull: false,
            defaultValue: 'TO DO',
        },
        project_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        reporter_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        assignee_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'Issue',
        tableName: 'Issues',
        timestamps: true,
    }
);

export default Issue;