import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

export const ProjectMember = sequelize.define('ProjectMember', {
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
        type: DataTypes.ENUM('owner', 'manager', 'developer', 'viewer'),
        allowNull: true,
        defaultValue: 'developer',
    },
}, {
    timestamps: true,
    indexes: [
        {
            unique: true,
            fields: ['project_id', 'user_id'],
        },
    ],
});

export default ProjectMember;