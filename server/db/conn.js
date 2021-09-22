import {} from "dotenv/config";
import mongoose from "mongoose";

const connection = mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongo connected");
  });

export default connection;
