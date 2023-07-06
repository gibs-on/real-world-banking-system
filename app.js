import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './src/routes/authRoutes';
import accountRoutes from './src/routes/accountRoutes';

const app = express();

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/accounts', accountRoutes);

export default app;
