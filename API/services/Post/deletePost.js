const {PrismaClient} = require('@prisma/client')

const deletePost = async (req, res) => {
    try{
        const prisma = new PrismaClient()
        const post_id = req.params.id
        const decodedToken = req.decodedToken
        const post = await prisma.post.findFirst({
            where: {
                id: post_id,
                userId: decodedToken.id
            }
        })
        if (!post) {
            return res.status(404).send({
                error: "Post Not Found"
            })
        }
        if (post.userId !== decodedToken.id) {
            return res.status(403).send({
                error: "You are not authorized to delete this post"
            })
        }
        
        await prisma.post.delete({
            where: {
                id: post_id,
                userId: decodedToken.id
            }
        })
        res.status(201).send({
            message: "Post Deleted",
            post
        })
    }catch(err){
        console.log(err)
        res.status(500).send({
            error: "Error Deleting Post",
            message: err.message
        })
    }
}

module.exports = deletePost