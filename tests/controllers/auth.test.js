
const { login, register } = require('../../src/controllers/authController');

describe('Authentication', () => {
    test('Login should return a valid JWT token', () => {
        // Arrange: Set up the initial state
        const credentials = {
            email: 'test@example.com',
            password: 'password123',
        };

        // Act: Perform the action being tested
        const token = login(credentials);

        // Assert: Check the expected outcome
        expect(token).toBeDefined();
        // Add more assertions as needed
    });

    test('Register should create a new user in the database', () => {
        // Arrange: Set up the initial state
        const newUser = {
            name: 'John Doe',
            email: 'johndoe@example.com',
            password: 'password123',
        };

        // Act: Perform the action being tested
        const registeredUser = register(newUser);

        // Assert: Check the expected outcome
        expect(registeredUser).toBeDefined();
        // Add more assertions as needed
    });
});
