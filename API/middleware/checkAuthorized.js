const { PrismaClient } = require("@prisma/client")
const tokenVerification = require("../Validators/tokenVerification")

const checkAuthorized = async (req, res, next) => {
    // Check if the user is authorized
    if (req.headers.authorization === undefined) {
        return res.status(400).send({
            error: "Not Authorized"
        })
    }
    // Check if the token is valid
    const decodedToken = tokenVerification(req.headers.authorization)
    if (!decodedToken) {
        return res.status(400).send({
            error: "Invalid Token"
        })
    }
    // Check if the user has reached the maximum number of tags
    const prisma = new PrismaClient()

    const user = await prisma.user.findFirst({
        where: {
            id: decodedToken.id
        }
    })
    if (!user) {
        return res.status(404).send({
            error: "User Not Found"
        })
    }

    req.decodedToken = decodedToken;
    next()
}

module.exports = checkAuthorized