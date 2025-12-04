import Project from '../models/Project.js';
import ProjectMember from '../models/ProjectMember.js';
import User from '../models/User.js';

//Our controller for when someone creates a Project
export const createProject = async (req, res) => {
    try {
        //Project details
        const { name, description, repositoryURL } = req.body;
        const userId = req.user.id;

        //We make the new Project in our database
        const newProject = await Project.create({
            name,
            description,
            repositoryURL
        });

        //create a new project with who created it and set his role to ADMIN
        await ProjectMember.create({
            project_id: newProject.id,
            user_id: userId,
            role: 'ADMIN'
        });

        //Send success status
        res.status(201).json({
            message: 'Project created successfully',
            project: newProject
        });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message});
    }
};

export const getProjects = async (req, res) => {
    try {
        const userId = req.user.id;

        //This will return a User object with a 'projects' object inside it that contains all the projects where our User is implicated
        const userWithProjects = await User.findByPk(userId, {
            include: [
                {
                    model: Project,
                    as: 'projects',
                    through: {
                        attributes: ['role']
                    }
                }
            ]
        });

        if (!userWithProjects) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(userWithProjects.projects);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};