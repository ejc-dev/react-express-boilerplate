const jwt = require('jsonwebtoken')

module.exports = (req,res,next) => {
    try {
        const token = req.header('x-auth-token')
        if(!token) {
        return res.status(401).json({ msg: 'No token, authorization denied'})
        }
        const decoded = jwt.verify(token, process.env.JWTSECRET)
        req.user = decoded.user
        next()
    } catch (err) {
        console.log(err.message)
        res.status(401).json( {msg: 'Invalid Token'})
    }
}