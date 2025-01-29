

import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// dotenv.config();



const connectDB = async() =>{
    try {
        const db = process.env.DB_URL;
        await mongoose.connect(db)
        console.log("DB connected successfully");
    } catch (error) {
        console.error("Unable to connect to MongoBD", error);
        process.exit(1);
        
    }
};

export default connectDB;




