// Import required modules and dependencies
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authService = require('../services/authService');

// Controller methods
const authController = {
  register: async (req, res) => {
    try {
      // Extract user data from request body
      const { username, email, password } = req.body;

      // Check if user with the same username already exists
      const existingUser = await authService.findUserByEmail(username);
      if (existingUser) {
        return res.status(400).json({ error: 'User Email already exists' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = await authService.createUser(username, email, hashedPassword);

      // Generate a JSON Web Token (JWT)
      const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET);

      // Respond with the token and user data
      res.status(201).json({ token, user: newUser });
    } catch (error) {
      console.error('Error in authController.register:', error);
      res.status(500).json({ error: 'Server error' });
    }
  },

  login: async (req, res) => {
    try {
      // Extract user data from request body
      const { email, password } = req.body;

      // Find the user by username
      const user = await authService.findUserByEmail(email);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Compare the password
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
        return res.status(401).json({ error: 'Invalid password' });
      }

      // Generate a JSON Web Token (JWT)
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

      // Respond with the token and user data
      res.json({ token, user });
    } catch (error) {
      console.error('Error in authController.login:', error);
      res.status(500).json({ error: 'Server error' });
    }
  }
};

module.exports = authController;
