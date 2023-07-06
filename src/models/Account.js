import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';

const Account = sequelize.define('Account', {
    accountNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    balance: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0
    }
});

export default Account;
