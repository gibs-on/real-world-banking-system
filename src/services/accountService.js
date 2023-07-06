// import Account from '../models/Account';

const accountService = {
    createAccount: async (accountNumber, balance) => {
        const newAccount = await Account.create({ accountNumber, balance });
        return newAccount;
    },

    getAccountDetails: async (accountId) => {
        const account = await Account.findByPk(accountId);
        if (!account) {
            throw new Error('Account not found');
        }
        return account;
    }
};

export default accountService;
