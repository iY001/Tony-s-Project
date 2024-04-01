const { PrismaClient } = require("@prisma/client")
const tokenVerification = require("../../Validators/tokenVerification")

const connectTag = async (req,res)=>{
    try{
        // Check if the user is authorized
        const prisma = new PrismaClient()
        const post_id = req.params.post_id
        const tag_id = req.params.tag_id
        const decodedToken = req.decodedToken
        const post = await prisma.post.findFirst({
            where: {
                id: post_id
            }
        })

        if(!post){
            return res.status(404).send({
                error: "Post Not Found"
            })
        }
        const tag = await prisma.tag.findFirst({
            where: {
                id: tag_id
            }
        })
        if(!tag){
            return res.status(404).send({
                error: "Tag Not Found"
            })
        }

        if(post.user_id !== decodedToken.id){
            return res.status(404).send({
                error: "You are not authorized to connect this tag"
            })
        }
        await prisma.post.update({
            where: { id: post_id },
            data: {
              tag: {
                connect: { id: tag_id },
              },
            },
          });
        res.status(200).send({
            message: "Tag Connected"
        })

}catch(err){
    console.log(err)
    res.status(500).send({
        error: "Internal Server Error"
    })
}
}

module.exports = connectTag