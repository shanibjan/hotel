import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import menuRoute from './routes/menuRoute.js'
import cors from 'cors'
const app=express()

dotenv.config()
connectDB()

app.use(cors());
app.use(express.json());

app.use('/api/v1/menu',menuRoute)




const PORT = process.env.PORT || 7000;

app.listen(PORT,()=>{
  console.log(`server running successfully on ${PORT}`);
})