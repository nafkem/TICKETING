import express from 'express';
import cors from 'cors'
const app = express();

import dotenv from 'dotenv';
import dbConnect from './src/utils/config.js';

import userRoute from './src/routes/userRoute.js';
import categoryRoute from './src/routes/categoryRoute.js';
import agentRoute from './src/routes/agentRoute.js';
import ticketRoute from './src/routes/ticketRoute.js';
import articleRoute from './src/routes/articleRoute.js';
import authRoute from './src/routes/authRoute.js';


let PORT = process.env.PORT;

dotenv.config();
// ===connect to database
dbConnect();
// ===accept json files
app.use(express.json());
app.use(cors({credentials:true,origin:true}));

// ===register the routes=======
app.use('/api/v1', userRoute);
app.use('/api/v1', agentRoute);
app.use('/api/v1', authRoute);
app.use('/api/v1', ticketRoute);
app.use('/api/v1', categoryRoute);
app.use('/api/v1', articleRoute);

 
app.listen(PORT, ()=>{
    console.log("Backend server is running on http://localhost:"+PORT)
}) 
