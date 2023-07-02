const Account = require('../models/account');

const accountService = {
    async getAccounts(req, res) {
        const accounts = await Account.find();
        res.json(accounts);
    },

    async createAccount(req, res) {
        const { accountNumber, balance, ownerId } = req.body;
        const newAccount = await Account.create({ accountNumber, balance, ownerId });
        res.status(201).json(newAccount);
    },

    async getAccountById(req, res) {
        const account = await Account.findById(req.params.id);
        if (!account) {
            return res.status(404).json({ message: 'Account not found' });
        }
        res.json(account);
    },

    async updateAccount(req, res) {
        const { accountNumber, balance } = req.body;
        const updatedAccount = await Account.findByIdAndUpdate(req.params.id, { accountNumber, balance }, { new: true });
        if (!updatedAccount) {
            return res.status(404).json({ message: 'Account not found' });
        }
        res.json(updatedAccount);
    },

    async deleteAccount(req, res) {
        const deletedAccount = await Account.findByIdAndDelete(req.params.id);
        if (!deletedAccount) {
            return res.status(404).json({ message: 'Account not found' });
        }
        res.json(deletedAccount);
    },
};

module.exports = accountService;
