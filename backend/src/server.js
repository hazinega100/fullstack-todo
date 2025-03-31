import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import tasksRouter from './routes/tasks.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use('/api/v1/tasks', tasksRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
