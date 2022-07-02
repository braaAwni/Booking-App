import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

//inatelize mongoose
const connect = async () => {
    try {
      await mongoose.connect(process.env.mongo);
      console.log("MongoDB Connected");
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  //import mongoose connection
  //لو صارت مشكلة بالرفع عالموقع
  mongoose.connection.on("connected", () => {
    console.log("MongoDB Connected!");
  });
  
  mongoose.connection.on("disconnected", () => {
    console.log("MongoDB Disconnected");
  });
  
  export default connect;