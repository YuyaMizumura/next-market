import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://yuyamjfox:0xnrDvoIO71JmTZ1@cluster0.cqx1z.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Success: Connected to MongoDB");
    }
    catch(e) {
        console.log("Failed: Unconnected to MongoDB");
        throw new Error();
    } 
}

export default connectDB;