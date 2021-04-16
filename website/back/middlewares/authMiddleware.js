const ensureAuth  = (res, res, next) => {
    if(req.isAuthenticated()) {
        return next()
    } else {
        res.redirect('/login')
    }
    
}

const ensureGuest = (req, res, next) => {
    if(!req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/dashboard')
    }
}

export { ensureAuth, ensureGuest }