import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    try {
        const { username, email, password} = req.body;

        //We verify if we already have this email in our User table
        const existingEmail = await User.findOne({ where: { email }});
        if(existingEmail) {
            return res.status(400).json({ message: 'This email already exists.' });
        }

        const existingUsername = await User.findOne({ where: {username}});
        if(existingUsername) {
            return res.status(400).json({ message: 'This username is already taken.' });
        }

        //We cryptin our password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //We create the User in our db
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword
        });

        res.status(201).json({ message: 'User created successfully', userId: newUser.id });
    } catch(error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        //We look for our user
        const user = await User.findOne({ where: { email } });
        if(!user) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }

        //Verify the password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }

        //Generate a token (JWT)
        const token = jwt.sign(
            { id: user.id, username: user.username },
            process.env.JWT_SECRET || 'temporary_secret',
            { expiresIn: '1d' }
        );

        res.status(200).json({
            token,
            user: { id: user.id, username: user.username, email: user.email }
        });
    } catch(error) {
        res.status(500).json({ message: 'Server error', error: error.message })
    }
}