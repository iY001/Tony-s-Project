const { PrismaClient } = require('@prisma/client')

const getPostById = async (req, res) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(400).send({
                error: "Post Id Required"
            })
        }
        const prisma = new PrismaClient()
        const post = await prisma.post.findFirst({
            where: {
                id
            },
            include: {
                user: true,
                comments: true
            }
        })
        if (!post) {
            return res.status(404).send({
                error: "Post Not Found"
            })
        }
        res.status(200).send({
            message: "Post Found",
            post
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({
            error: "Error Retriving Post",
            message: err.message
        })
    }
}

module.exports = getPostById