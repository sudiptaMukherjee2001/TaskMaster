import mongoose from "mongoose";
import { DATABASE_NAME } from "../constant.js";
import dotenv from 'dotenv';
dotenv.config();  // Load environment variables
const connectDb = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URL}/${DATABASE_NAME}`);
        console.log("Database connected successfuly");
    } catch (error) {
        console.log(`MONGODB CONNECTION ERROR ${process.env.MONGODB_URL}/${process.env.DATABASE_NAME}`, error)
    }

}

export default connectDb;