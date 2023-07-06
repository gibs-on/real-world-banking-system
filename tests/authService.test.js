import bcrypt from 'bcrypt';
import authService from '../src/services/authService';
import User from '../src/models/User';

jest.mock('../src/models/User'); // Mocking the User model

describe('Authentication Service', () => {
    it('should register a new user', async () => {
        const username = 'testuser';
        const password = 'password123';
        const hashedPassword = await bcrypt.hash(password, 10);

        User.create.mockResolvedValueOnce({ username, password: hashedPassword });

        const newUser = await authService.register(username, password);

        expect(User.create).toHaveBeenCalledTimes(1);
        expect(User.create).toHaveBeenCalledWith({ username, password: hashedPassword });
        expect(newUser.username).toBe(username);
    });

    it('should log in an existing user', async () => {
        const username = 'testuser';
        const password = 'password123';
        const hashedPassword = await bcrypt.hash(password, 10);

        User.findOne.mockResolvedValueOnce({ username, password: hashedPassword });

        const user = await authService.login(username, password);

        expect(User.findOne).toHaveBeenCalledTimes(1);
        expect(User.findOne).toHaveBeenCalledWith({ where: { username } });
        expect(user.username).toBe(username);
    });
});
