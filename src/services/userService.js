const User = require('../models/user');

const userService = {
    async getUsers(req, res) {
        const accounts = await User.find();
        res.json(accounts);
    },

    async getUserById(req, res) {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    },

    async updateUser(req, res) {
        const { email, name } = req.body;
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
