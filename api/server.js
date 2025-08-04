import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import './models/todoListModels.js'
import todoListRoutes from './routes/todoListRoutes.js'

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;
const mongoURI = process.env.mongoDB_URI || 'mongodb://localhost:27017/testCollection';

mongoose.connect(mongoURI)
    .then(() => console.log("MongoDB connected successfully"))
    .catch(err => console.error("MongoDB connection error:", err));

app.listen(port);
app.use(express.json());
app.use('/api', todoListRoutes);

console.log("server connected sucessfully")