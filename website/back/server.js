import express from 'express';
import dotenv from 'dotenv'
const ENV = dotenv.config()
import path from 'path'
import passport from 'passport'
import GitHubStrategy from 'passport-github2'
const OauthStrategy = GitHubStrategy.Strategy
import connectDB from './db.js'
connectDB()
import {SESSION_OPTIONS} from './config/session.js'
import cors from 'cors'
import helmet from 'helmet'
import session from 'express-session'
import morgan from 'morgan'
const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

//Route Imports
import userRouter from './routes/userRoutes.js'
import botRouter from './routes/botRoutes.js'
//3rd Part API Imports
import spotifyApi from './services/spotify.js'
//Middlewae Imports
import { notFound, errorHandler } from './middlewares/errorMiddlewares.js'

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    origin: process.env.ORIGIN_URL
}))
app.use(helmet())

//Session
import connectRedis from 'connect-redis'
import Redis from 'ioredis'
import {REDIS_OPTIONS} from './config/redis.js'

const RedisStore = connectRedis(session)
const client = new Redis(REDIS_OPTIONS)
client.on('error', function (error) {
  console.dir(error)
  console.error("Redis Error")
})
client.on("ready", function() {
  console.dir("Redis connection is ready")
})
client.on("end", function() {
  console.dir("Redis connection closed")
})

const store = new RedisStore({client})

app.use(
    session({ ...SESSION_OPTIONS, store})
)
//Pasport Auth

//Passport Routes

app.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

app.get('/auth/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.use(passport.initialize())
app.use(passport.session())

//API Routes
app.use('/api/bots', botRouter)
app.use('/api/users', userRouter)
app.use('/api/spotify', spotifyApi)

const __dirname = path.resolve()
app.use('/uploads', 
  express.static(path.join(__dirname, '/uploads'))
)

//Production Build
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} environment on ${PORT}`))