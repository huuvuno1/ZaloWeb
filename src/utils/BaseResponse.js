module.exports = {
    response: (res, data = {}, status = 200, message = '') => {
        res.status(status).json({
            status,
            message,
            data
        })
    }
}