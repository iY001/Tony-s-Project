const { PrismaClient } = require('@prisma/client')

const getAllUsers = async (req, res) => {
    try {
        const prisma = new PrismaClient()
        const users = await prisma.user.findMany({})
        if (!users) {
            res.status(404).send({
                message: "Users Not Found"
            })
        }
        res.status(200).json(users)
    } catch (err) {
        console.error(err)
        res.status(500).send({
            message: "Error Retriving Users",
            error: err.message
        })
    }
}

module.exports = getAllUsers
