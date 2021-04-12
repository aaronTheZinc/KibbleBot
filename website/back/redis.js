import session from 'express-session'
import connectRedis from 'connect-redis'
import Redis from 'ioredis'
import {REDIS_OPTIONS} from './config/redis.js'

const RedisStore = connectRedis(session)
const client = new Redis(REDIS_OPTIONS)
const store = new RedisStore(client)

export default store