const { DataTypes } = require('sequelize');
const sequelize = require('../../database/connection');

const Account = sequelize.define('Account', {
    accountNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    balance: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = Account;
