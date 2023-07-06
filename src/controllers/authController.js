import authService from '../services/authService';

const authController = {
    register: async (req, res) => {
        try {
            const { username, password } = req.body;
            const newUser = await authService.register(username, password);
            res.status(201).json(newUser);
        } catch (error) {
            console.error('Error in authController.register:', error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    login: async (req, res) => {
        try {
            const { username, password } = req.body;
            const user = await authService.login(username, password);
            res.json(user);
        } catch (error) {
            console.error('Error in authController.login:', error);
            res.status(500).json({ error: 'Server error' });
        }
    }
};

export default authController;
