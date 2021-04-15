import express from 'express'
const passportRouter = express.Router()

passportRouter.get('/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

passportRouter.get('/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

passportRouter.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

export default passportRouter