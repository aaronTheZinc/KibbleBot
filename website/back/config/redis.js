import dotenv from 'dotenv'
dotenv.config()

const {
  REDIS_PORT,
  REDIS_HOST,
  REDIS_PASSWORD
} = process.env

const REDIS_PORT_N = parseInt(REDIS_PORT)

export const REDIS_OPTIONS = {
  port: REDIS_PORT_N,
  host: REDIS_HOST,
  password: REDIS_PASSWORD
}