import User from './User.js';
import Project from './Project.js';
import ProjectMember from './ProjectMember.js';
import Issue from './Issue.js';
import Comment from './Comment.js';

User.belongsToMany(Project, {
    through: ProjectMember, 
    foreignKey: 'user_id', 
    otherKey: 'project_id',
    as: 'projects',         
});

Project.belongsToMany(User, {
    through: ProjectMember,
    foreignKey: 'project_id',
    otherKey: 'user_id',
    as: 'members', 
});

ProjectMember.belongsTo(User, { foreignKey: 'user_id' });
ProjectMember.belongsTo(Project, { foreignKey: 'project_id' });

Project.hasMany(Issue, { 
    foreignKey: 'project_id', 
    onDelete: 'CASCADE'
});

Issue.belongsTo(Project, { 
    foreignKey: 'project_id' 
});

User.hasMany(Issue, { 
    foreignKey: 'reporter_id', 
    as: 'reportedIssues' 
});

Issue.belongsTo(User, { 
    foreignKey: 'reporter_id', 
    as: 'reporter'
});

User.hasMany(Issue, { 
    foreignKey: 'assignee_id', 
    as: 'assignedIssues' 
});

Issue.belongsTo(User, { 
    foreignKey: 'assignee_id', 
    as: 'assignee'
});

Issue.hasMany(Comment, { 
    foreignKey: 'issue_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Issue, { 
    foreignKey: 'issue_id' 
});

User.hasMany(Comment, { 
    foreignKey: 'user_id' 
});

Comment.belongsTo(User, { 
    foreignKey: 'user_id' 
});

export { User, Project, ProjectMember, Issue, Comment };