import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

export const mongoSampleMflix = mongoose.createConnection(process.env.MONGODB!).useDb("sample_mflix")

