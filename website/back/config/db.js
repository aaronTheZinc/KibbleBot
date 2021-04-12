import mongoose from 'mongoose';

const {
  MONGO_USERNAME = 'admin',
  MONGO_PASSWORD = 'secret',
  MONGO_HOST = 'localhost:27017',
  MONGO_DATABASE = 'auth'
} = process.env

export const MONGO_URI = `mongodb://${MONGO_USERNAME}:${
  encodeURIComponent(MONGO_PASSWORD)
}@${MONGO_HOST}/${MONGO_DATABASE}`

export const MONGO_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}