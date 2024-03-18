const {PrismaClient} = require('@prisma/client')

const getAllPosts = async (req, res) => {
    try{
        const prisma = new PrismaClient()
        const posts = await prisma.post.findMany({})
        res.status(200).send(posts)
    }catch(err){
        console.log(err)
        res.status(500).send({
            message: "Error Retriving Posts",
            error: err.message
        })
    }
}

module.exports = getAllPosts