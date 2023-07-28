const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = (req, res, next) => {
    try {
        if(!req.headers.authorization){
            throw new Error('Token is missing from header')
        }
        const token = req.headers.authorization.split('Bearer')[1].trim();
        const decodedToken = jwt.verify(token,
             process.env.TOKEN_KEY || "RANDOM_SECRET_TOKEN");
            return next();
        
    } catch(error){
        console.error('Error in tokenValidation.js', error)
        response.status = 401
        response.message = error.message
    }
    return res.status(response.status).send(response)
} 