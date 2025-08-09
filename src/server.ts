import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import apiRoutes from './routes/api.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.get('/', (req, res) => {
    res.send('BanglaScript API is running');
});

// API routes
app.use('/api', apiRoutes);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
