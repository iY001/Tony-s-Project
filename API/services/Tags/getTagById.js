const {PrismaClient} = require('@prisma/client')

const getTagById = async (req,res) => {
    try{
        const prisma = new PrismaClient()
        const tags = await prisma.tag.findMany({
            include: {
                posts: true,
                user: true
            }
        })
        res.status(200).send(tags)
    }catch(err){
        console.log(err)
        res.status(500).send({
            message: "Error Retriving Tags",
            error: err.message
        })
    }
}

module.exports = getTagById