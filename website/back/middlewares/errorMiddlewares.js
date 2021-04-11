export const catchAsync = (handler) => (...args) => {
    handler(...args).catch(args[2])
}

export const serverError = (err, req, res, next) => {
    if(err.status) {
        console.error(err.stack)
    }

    res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' })
}

export const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
}

export const errorHandler = (err, req, res, nex) => {
    const statusCode = res.status === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}