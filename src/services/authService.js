import bcrypt from 'bcrypt';
import User from '../models/User.js';

const authService = {
    register: async (username, email, password) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, email, password: hashedPassword });
        return newUser;
    },

    login: async (email, password) => {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            throw new Error('User not found');
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            throw new Error('Invalid password');
        }
        return user;
    }
};

export default authService;
