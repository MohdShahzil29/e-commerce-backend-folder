import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MongoDB_URL);
    console.log(
      `Conneted To Mongodb Databse ${conn.connection.host}` 
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}` );
  }
};

export default connectDB;
