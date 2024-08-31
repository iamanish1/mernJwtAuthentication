import express from 'express';
import dotenv from 'dotenv' ; 
import { connectDb } from './connectiondb.js';
import userRouter from './routes/user.routes.js';

dotenv.config();

const app = express();
//Database connection

connectDb()

//Middleware

app.use('/api',userRouter);

app.listen(process.env.PORT||3000,()=>{
     console.log(`Server is running on port ${process.env.PORT}`);
 });

 


