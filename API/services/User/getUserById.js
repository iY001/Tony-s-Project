const { PrismaClient } = require('@prisma/client')

const getUserById = async (req, res) => {
    try {
        const prisma = new PrismaClient()
        const user_id = req.params.id
        const user = await prisma.user.findFirst({
            where: {
                id: user_id
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

module.exports = getUserById