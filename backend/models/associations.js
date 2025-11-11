import User from './User.js';
import Project from './Project.js';
import ProjectMember from './ProjectMember.js';

//One user to many Projects
User.belongsToMany(Project, {
    through: ProjectMember,
    foreignKey: 'user_id',
    otherKey: 'project_id',
    as: 'projects',         
});

//One Project has many members
Project.belongsToMany(User, {
    through: ProjectMember,
    foreignKey: 'project_id',
    otherKey: 'user_id',
    as: 'members',
});

//Direct relations
ProjectMember.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
ProjectMember.belongsTo(Project, { foreignKey: 'project_id', as: 'project' });

export { User, Project, ProjectMember };