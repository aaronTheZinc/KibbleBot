import express from 'express';
import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: './.env' })
import passport from 'passport'
import GitHubStrategy from 'passport-github2'
GitHubStrategy.Strategy
import connectDB from './db.js'
connectDB()
import store from './redis.js'
import {SESSION_OPTIONS} from './config/session.js'
import { createServer } from 'http'
import cors from 'cors'
import helmet from 'helmet'
import session from 'express-session'
const app = express();
const server = createServer(app)

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

//Route Imports
import userRouter from './routes/userRoutes.js'
import botRouter from './routes/botRoutes.js'
//Middlewae Imports
import { notFound, errorHandler } from './middlewares/errorMiddlewares.js'

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    origin: process.env.ORIGIN_URL
}))
app.use(helmet())

//Session
app.use(
    session({SESSION_OPTIONS, store})
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

//Routes
app.use('/api/bots', botRouter)
app.use('/api/users', userRouter)

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

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} environment on  ${PORT}`))