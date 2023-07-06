import accountService from '../services/accountService.js';

const accountController = {
    createAccount: async (req, res) => {
        try {
            const { accountNumber, balance } = req.body;
            const newAccount = await accountService.createAccount(accountNumber, balance);
            res.status(201).json(newAccount);
        } catch (error) {
            console.error('Error in accountController.createAccount:', error);
            res.status(500).json({ error: 'Server error' });
        }
    },

    getAccountDetails: async (req, res) => {
        try {
            const accountId = req.params.id;
            const account = await accountService.getAccountDetails(accountId);
            res.json(account);
        } catch (error) {
            console.error('Error in accountController.getAccountDetails:', error);
            res.status(500).json({ error: 'Server error' });
        }
    }
};

export default accountController;
