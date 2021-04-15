import express from 'express'
const passportRouter = express.Router()

import passport from 'passport'

passportRouter.get('/github',
  passport.authenticate('github', { scope: [ 'profile' ] }));

passportRouter.get('/login', (req, res) => {
  if(req.user) {
    res.json({
      success: true,
      message: "User auth is succesful",
      user: req.user,
    })
  }
})

passportRouter.get('/github/callback', 
  passport.authenticate('github', { failureRedirect: 'http://localhost:3000/login', successRedirect: "http://localhost:3000/dashboard" }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

passportRouter.get('/logout', function(req, res){
  req.logout();
  res.redirect('http://localhost:3000');
});

export default passportRouter