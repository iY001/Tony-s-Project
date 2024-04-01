const { PrismaClient } = require('@prisma/client')

const getAllTags = async (req, res) => {
    try {
        const prisma = new PrismaClient()
        const tags = await prisma.tag.findMany({
            include: {
                user: true,
                Post: true
            }
        })
        res.status(200).send(tags)
    } catch (err) {
        console.log(err)
        res.status(500).send({
            message: "Error Retriving Tags",
            error: err.message
        })
    }
}

module.exports = getAllTags