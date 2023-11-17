import mongoose from "mongoose";

const { DB_URI } = process.env;
const connection = {};

export const connectDb = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(DB_URI);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
