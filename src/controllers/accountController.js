const Account = require('../models/account');

async function getAccounts(req, res) {
    try {
        const accounts = await Account.find({ userId: req.user.userId });
        res.json(accounts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

async function createAccount(req, res) {
    const { accountNumber, balance } = req.body;

    try {
        const account = new Account({ accountNumber, balance, userId: req.user.userId });
        await account.save();
        res.status(201).json(account);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    getAccounts,
    createAccount,
};
