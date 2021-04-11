import express from 'express';
import passport from 'passport'
import githubPassport from './auth/passport.js'
githubPassport(passport)
import connectDB from './config/db.js'
connectDB()
import { createServer } from 'http'
import cors from 'cors'
import helmet from 'helmet'
import session from 'express-session'
import Redis from 'ioredis'
import ConnectRedis from 'connect-redis'
const RedisStore = ConnectRedis(session)
const app = express();
const server = createServer(app)

import userRouter from './routes/userRoutes.js'
import botRouter from './routes/botRoutes.js'

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors({
    origin: process.env.ORIGIN_URL
}))
app.use(helmet())
app.enable('trust proxy')

const RedisClient = new Redis(REDIS_OPTIONS)
const store = new RedisStore(RedisClient)

app.use(
    session({
        ...SESSION_OPTIONS,
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        store: new RedisStore(RedisClient),
        cookie: {
                //1 day
            maxAge: 24 * 60 * 60 * 1000
        }
}))

import dotenv from 'dotenv';
dotenv.config();

app.get('/', (req, res) => {
    res.send('test123')
})

//Session
app.use(
    session({
      ...SESSION_OPTIONS,
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
      store: new RedisStore(RedisClient),
      cookie: {
          //lasts 1 day
        maxAge: 24*60*60*1000
    }
    })
)

//Passport AUTH
app.get('/login', function(req, res){
  res.render('login', { user: req.user });
});

app.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.use(passport.initialize())
app.use(passport.session())

//Routes
app.use('/api/bots', botRouter)
app.use('/api/users', userRouter)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} environment on  ${PORT}`))