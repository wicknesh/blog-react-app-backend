import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB  from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import jwt from 'jsonwebtoken';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/blogs', blogRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.send('Working')
})

app.listen(process.env.port, () => {
    console.log(`Server is listening to port ${process.env.port}`);
})

connectDB();