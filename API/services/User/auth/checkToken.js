const { PrismaClient } = require('@prisma/client')
const tokenVerification = require('../../../Validators/tokenVerification')

const checkToken = async (req, res) => {
    try {
        const prisma = new PrismaClient()
        const token = req.body.token
        const decodedToken = tokenVerification(token)

        const user = await prisma.user.findFirst({
            where: {
                token: token
            }
        })
        if (!user) {
            res.status(404).send({
                message: "User Not Found"
            })
        }
        res.send(user)
    } catch (err) {
        console.log(err)
        res.status(500).send({
            message: "Error Retriving User",
            error: err.message
        })
    }
}

module.exports = checkToken