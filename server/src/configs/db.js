import { connect } from "mongoose";

const connectDB = async () => {
  try {
    const conn = await connect(process.env.MONGODB_URI);
    if (conn) {
      console.log(`\n📶 MongoDB connected: ${conn.connection.host}`);
    }
  } catch (error) {
    console.log("\n❌ Error connecting MongoDB \n", error.message);
    process.exit(1); //
  }
};
export default connectDB;
