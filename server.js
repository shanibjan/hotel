import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import menuRoute from './routes/menuRoute.js'
import cors from 'cors'
import path from "path";
import { fileURLToPath } from "url";
const app=express()

dotenv.config()
connectDB()

app.use(cors());
app.use(express.json());
const corsOptions = {
  origin: 'https://hotel-1-16xr.onrender.com', // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true, // Allow cookies to be sent
  optionsSuccessStatus: 200 // For legacy browsers
};

app.use('/api/v1/menu',menuRoute)

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// Serve the index.html file for any unknown paths
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});



const PORT = process.env.PORT || 7000;

app.listen(PORT,()=>{
  console.log(`server running successfully on ${PORT}`);
})