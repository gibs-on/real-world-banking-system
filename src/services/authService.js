import bcrypt from 'bcrypt';
// import User from '../models/User';

const authService = {
    register: async (username, password) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, password: hashedPassword });
        return newUser;
    },

    login: async (username, password) => {
        const user = await User.findOne({ where: { username } });
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
