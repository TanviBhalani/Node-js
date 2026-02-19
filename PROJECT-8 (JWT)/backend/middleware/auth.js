const jwt = require("jsonwebtoken")

const auth = (req,res, next) => {
    let token = req.header("Authorization")

    if(!token){
        return res.json({msg : "Token Not Found!"})
    }
    let newToken = token.slice(7,token.length)

    let decode = jwt.verify(newToken, "rnw")
    req.user = decode
    next()
}

module.exports = auth