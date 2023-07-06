import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
});

try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

export default sequelize;
