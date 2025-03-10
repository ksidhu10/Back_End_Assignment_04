import express from 'express';
import morgan from 'morgan';
import userRoutes from './api/v1/routes/userRoute';
import loanRoutes from './api/v1/routes/loanRoutes';

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/loans', loanRoutes);

// 🚀 **Remove the app.listen() from app.ts**
export default app;
