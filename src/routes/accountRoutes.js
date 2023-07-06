import express from 'express';
import accountController from '../controllers/accountController';

const router = express.Router();

router.post('/', accountController.createAccount);
router.get('/:id', accountController.getAccountDetails);

export default router;
