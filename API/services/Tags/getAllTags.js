const {PrismaClient} = require('@prisma/client')

const getAllTags = async (req,res) => {
    try{
        const id = req.params.id
        if (!id) {
            return res.status(400).send({
                error: "Tag Id Required"
            })
        }
        const prisma = new PrismaClient()
        const tags = await prisma.tag.findFirst({
            where: {
                id: id
            },
            include: {
                posts: true
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

module.exports = getAllTags