import {} from "dotenv/config";
import mongoose from "mongoose";

// const URI = `mongodb+srv://qurban:123@cluster0.vxjpl.mongodb.net/CVmaker?retryWrites=true&w=majority`;

const connection = mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongo connected");
  });

export default connection;
