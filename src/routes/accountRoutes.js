import express from 'express';
import accountController from '../controllers/accountController.js';

const accountRouter = express.Router();

accountRouter.post('/', accountController.createAccount);
accountRouter.get('/:id', accountController.getAccountDetails);

export { accountRouter };
