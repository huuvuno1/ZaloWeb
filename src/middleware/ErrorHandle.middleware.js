const GlobalException = function(err, req, res, next) {
    console.log("do exception")
    res.json({
        status: 500,
        message: "Server handle error"
    })
}

module.exports = {
    GlobalException
}