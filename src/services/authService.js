// Import required modules and dependencies
const User = require('../models/user');

// Service methods
const authService = {
    findUserByUsername: async (username) => {
        try {
            // Find the user by username
            const user = await User.findOne({ where: { username } });
            return user;
        } catch (error) {
            console.error('Error in authService.findUserByUsername:', error);
            throw new Error('User retrieval failed');
        }
    },

    createUser: async (username, email, password) => {
        try {
            // Create a new user
            const newUser = await User.create({ username, email, password });
            return newUser;
        } catch (error) {
            console.error('Error in authService.createUser:', error);
            throw new Error('User creation failed');
        }
    }
};

module.exports = authService;
