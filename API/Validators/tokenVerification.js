const jwt = require('jsonwebtoken');

const tokenVerification = (token) => {
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        return decodedToken;
    }catch(err){
        console.log("Error Verifying Token")
    }
}

module.exports = tokenVerification