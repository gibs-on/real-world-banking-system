import express from 'express';
import bodyParser from 'body-parser';
import { authRouter } from './src/routes/authRoutes.js';
import { accountRouter } from './src/routes/accountRoutes.js';

const app = express();

app.use(bodyParser.json());

app.use('/auth', authRouter);
app.use('/accounts', accountRouter);

export default app;
