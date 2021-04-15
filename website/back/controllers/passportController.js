import asyncHandler from 'express-async-handler';
import passport, { authenticate } from 'passport'

const github = (req, res) => {
    authenticate('github', { scope: [ 'user:email' ] } )
}

const githubCallback = (req, res) => {
    authenticate('github', { failureFlash: "Invalid username or password, redirecting to Login Page" })
    res.status(200).json(req.user)
        // If this function gets called, authentication was successful.
        // `req.user` contains the authenticated user.
        res.redirect('/dashboard')
}

passportRouter.get('/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));

passportRouter.get('/github/callback', 
  passport.authenticate('github', { failureFlash: 'Invalid username or password, redirecting to Login Page' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});

passportRouter.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

export default passportRouter