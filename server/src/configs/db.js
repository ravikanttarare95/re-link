import { connect } from "mongoose";

const connectDB = async () => {
  try {
    const conn = await connect(process.env.MONGODB_URI);
    if (conn) {
      console.log(`\n📶 MongoDB connected: ${conn.connection.host} \n`);
    }
  } catch (error) {
    console.log("\n❌ Error connecting MongoDB \n");
    process.exit(1); //
  }
};
export default connectDB;
