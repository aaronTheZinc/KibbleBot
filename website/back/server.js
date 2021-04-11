import express from 'express';
const app = express();

app.use(express.json());

import dotenv from 'dotenv';
dotenv.config();

app.get('/', (req, res) => {
    res.send('test123')
})

//Passport AUTH
app.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} environment on ${PORT}`))