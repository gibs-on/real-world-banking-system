import request from 'supertest';
import app from '../app';
import accountService from '../src/services/accountService';

describe('Account Controller', () => {
    it('should create a new account', async () => {
        const accountData = { accountNumber: '1234567890', balance: 1000 };
        const response = await request(app).post('/accounts').send(accountData);
        expect(response.status).toBe(201);
        expect(response.body.accountNumber).toBe(accountData.accountNumber);
    });

    it('should get account details', async () => {
        const accountId = 1; // Assuming there is an account with ID 1
        const response = await request(app).get(`/accounts/${accountId}`);
        expect(response.status).toBe(200);
        expect(response.body.id).toBe(accountId);
    });
});
