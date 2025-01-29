
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import connectDB from './Controller/lib/db.js';
import infoRoute from './Views/info.route.js';

const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

app.use('/api/v1', infoRoute);



app.listen(port, () =>{
    console.log(`the server started listen on port ${port}`);
    connectDB()
});