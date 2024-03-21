const {PrismaClient} = require('@prisma/client')
const tokenVerification = require('../../Validators/tokenVerification')

const putTag = async (req,res)=>{
    try{
        const prisma = new PrismaClient()
        // Check if the user is authorized
        const token = req.headers.authorization
        if (!token) {
            return res.status(400).send({
                error: "Not Authorized"
            })
        }
        // Check if the token is valid
        const decodedToken = tokenVerification(token)
        if (!decodedToken) {
            return res.status(400).send({
                error: "Invalid Token"
            })
        }
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
        const tag = req.body
        const updatedTag = await prisma.tag.update({
            where: {
                id: tagid,
                user_id : user.id
            },
            data: {
                name: tag.name
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