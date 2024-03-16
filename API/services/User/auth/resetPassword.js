
const { PrismaClient } = require('@prisma/client')
const tokenVerification = require('../../../Validators/tokenVerification')
const bcrypt = require('bcrypt')
const resetPassword = async (req, res) => {
    try {
        const token = req.headers.authorization
        const { password } = req.body
        if (!token) {
            return res.status(400).send("Fill Token")
        }
        const decodedToken = tokenVerification(token)
        if (!decodedToken) {
            return res.status(400).send("Invalid Token")
        }
        if (!password) {
            return res.status(400).send("Fill Password")
        }
        const prisma = new PrismaClient()
        const user = await prisma.user.findFirst({
            where: {
                id: decodedToken.id
            }
        })
        if (!user) {
            return res.status(404).send("Not Found")
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        await prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                password: hashedPassword
            }
        })
        res.status(200).send("Password Reset")
    } catch (err) {
        console.log(err)
        res.status(500).send("Error")
    }
}

module.exports = resetPassword