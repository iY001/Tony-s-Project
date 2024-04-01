const { PrismaClient } = require('@prisma/client')
const jwt = require('jsonwebtoken')
const tokenVerification = require('../../Validators/tokenVerification')

const postTag = async (req, res) => {
    try {
        const prisma = new PrismaClient()
        const decodedToken = req.decodedToken
        const user = await prisma.user.findFirst({
            where: {
                id: decodedToken.id
            }
        })
        if (!user) {
            return res.status(404).send({
                error: "User Not Found"
            })
        }

        // Post the tag
        const tag = req.body
        if (!tag) {
            return res.status(400).send({
                error: "Tag Required"
            })
        }
        const newTag = await prisma.tag.create({
            data: {
                name: req.body.name,
                user_id: user.id
            }
        })
        res.status(200).send({
            message: "Tag Created",
            tag: newTag
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({
            error: "Error Creating Tag",
            message: err.message
        })
    }
}

module.exports = postTag