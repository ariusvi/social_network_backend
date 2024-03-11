import { dbConnection } from "../db.js";
import mongoose from "mongoose";
import userSeeder from "./userSeeder.js"
import "dotenv/config";

const seed = async () => {
    try {
        await dbConnection();
        console.log("Database connected");
        await userSeeder();

    } catch (error) {
        console.log("Database connection failed");
        console.log(error.message);
    }

    finally {
        await mongoose.connection.close();
        console.log("Database connection closed");
    }
}

seed();

