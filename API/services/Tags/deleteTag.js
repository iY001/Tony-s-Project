const {PrismaClient} = require('@prisma/client')
const tokenVerification = require('../../Validators/tokenVerification')

const deleteTag = async (req, res) => {
    try{
        const id = req.params.id
        if (!id) {
            return res.status(400).send({
                error: "Tag Id Required"
            })
        }
        const prisma = new PrismaClient()
        const token = req.headers.authorization
        if (!token) {
            return res.status(400).send({
                error: "Not Authorized"
            })
        }
        const decodedToken = tokenVerification(token)
        if (!decodedToken) {
            return res.status(400).send({
                error: "Invalid Token"
            })
        }
        // get the tag
        const tag = await prisma.tag.findFirst({
            where: {
                id: id,
                user_id: decodedToken.id
            }
        })
        if (!tag) {
            return res.status(404).send({
                error: "Tag Not Found"
            })
        }
        if (!decodedToken.id) {
            return res.status(404).send({
                error: "User Not Found"
            })
        }
        if (tag.user !== decodedToken.id || user.role !== "admin") {
            return res.status(403).send({
                error: "You are not authorized to delete this tag"
            })
        }
        const deletedTag = await prisma.tag.delete({
            where: {
                id: tag.id,
                user_id: user.id
            }
        })
        res.status(200).send({
            message: "Tag Deleted",
            tag: deletedTag
        })
    }catch(err){
        console.log(err)
        res.status(500).send({
            message: "Error Retriving Tags",
            error: err.message
        })
    }
}

module.exports = deleteTag