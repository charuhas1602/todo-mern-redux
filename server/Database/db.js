import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const USERPASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
    const MONGODB_URL = `mongodb+srv://${USERNAME}:${USERPASSWORD}@cluster0.lwlof6q.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URL, { useNewUrlParser: true })

    mongoose.connection.on('connected', () => {
        console.log("Database connected ✅")
    })
    mongoose.connection.on('disconnected', () => {
        console.log("Database Dis-connected ❌")
    })
    mongoose.connection.on('error', (err) => {
        console.log("Erro while connection database ⛔", err.message)
    })
}
export default Connection