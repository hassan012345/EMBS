import mongoose from "mongoose";

const connection = async () => {
    try {
      const result = await mongoose.connect("mongodb+srv://atlasAdmin:ctg7Ttoh9jp1jeTo@cluster0.8pibjv7.mongodb.net/EMBS?retryWrites=true&w=majority");
      if (result) {
        console.log("Database connected successfully!",result.connection.host);
      }
    } catch (error) {
      console.log("Database connection failed", error);
    }
  }

  export default connection;