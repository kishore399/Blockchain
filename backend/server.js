import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();

import router from "./routes/route.js";

const app = express();
const port = process.env.PORT;

app.use(express.json({
    limit : "7mb"
}));

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use("/api", router);

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is running on PORT ${port}`);
        });
    }catch(err){
        console.log("Error in connecting to MongoDB", err);
    }
};
startServer();