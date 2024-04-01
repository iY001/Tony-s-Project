const {PrismaClient} = require('@prisma/client')
const tokenVerification = require('../../Validators/tokenVerification')

const putTag = async (req,res)=>{
    try{
        const prisma = new PrismaClient()
        // Check if the user is authorized
        const decodedToken = req.decodedToken
        // Update the tag
        const user = await prisma.user.findFirst({
            where: {
                id: decodedToken.id
            }
        })
        if(!user){
            return res.status(404).send({
                error: "User Not Found"
            })
        }
        const tagid = req.params.id
        const tagUpdates = req.body
        const existingTag = await prisma.tag.findFirst({
            where: {
                id: tagid,
                user_id : user.id
            }
        })
        if(!existingTag){
            return res.status(404).send({
                error: "Tag Not Found"
            })
        }

        const updatedTag = await prisma.tag.update({
            where: {
                id: tagid,
                user_id : user.id
            },
            data: {
                name: tagUpdates ? tagUpdates.name :  existingTag.name
            }
        })
        res.status(200).send({
            message: "Tag Updated",
            tag: updatedTag
        })
    }catch(err){

    }
}

module.exports = putTag