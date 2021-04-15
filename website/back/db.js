import mongoose from 'mongoose';
import { MONGO_OPTIONS } from './config/db.js'

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, MONGO_OPTIONS)

    console.log(`MongoDB Connected: ${connect.connection.host}`)

  } catch (error) {
      console.error(`Error: ${error.message}`)
      process.exit(1)
  }
}

export default connectDB
