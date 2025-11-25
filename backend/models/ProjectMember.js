import { Sequelize, DataTypes, Model } from "sequelize";
import { sequelize } from "../database/db.js";

class ProjectMember extends Model {}

ProjectMember.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        project_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        role: {
            type: DataTypes.ENUM('ADMIN', 'MEMBER'),
            allowNull: false,
            defaultValue: 'MEMBER',
        },
    },
    {
        sequelize,
        modelName: 'ProjectMember',
        tableName: 'ProjectMembers',
        timestamps: true,
        indexes: [
            {
                unique: true,
                fields: ['project_id', 'user_id'],
            },
        ],
    }
);

export default ProjectMember;