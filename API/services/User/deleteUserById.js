const { PrismaClient } = require('@prisma/client')
const deleteUserById = async (req, res) => {
    try {
        const prisma = new PrismaClient()
        const user_id = req.params.id
        const user = await prisma.user.findUnique({
            where: {
                id: user_id
            }
        })
        if (!user) {
            res.status(404).send({
                message: "User Not Found"
            })
        }
        await prisma.user.delete({
            where: {
                id: user_id
            }
        })
        res.status(201).send({ message: "User Deleted Successfully", user})
    } catch (err) {
        console.log(err)
        res.status(500).send({
            message: "Error Retriving User",
            error: err.message
        })
    }
}

module.exports = deleteUserById