import mongoose from "mongoose";

const connectDB = () => {
    if (mongoose.connections[0].readyState) {
        console.log("DB already connected");
        return;
    }

    mongoose.connect(process.env.MONGODB_URI, {}, err);
    if (err) throw err;
    console.log("Database connected successfully");
};

export default connectDB;
