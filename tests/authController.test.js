import request from 'supertest';
import app from '../app';
import authService from '../src/services/authService';

describe('Authentication Controller', () => {
    it('should register a new user', async () => {
        const userData = { username: 'testuser', email: 'testuser@email.com', password: 'password123' };
        const response = await request(app).post('/register').send(userData);
        expect(response.status).toBe(201);
        expect(response.body.username).toBe(userData.username);
    });

    it('should log in an existing user', async () => {
        const userData = { email: 'testuser@email.com', password: 'password123' };
        const response = await request(app).post('/login').send(userData);
        expect(response.status).toBe(200);
        expect(response.body.username).toBe(userData.username);
    });
});

