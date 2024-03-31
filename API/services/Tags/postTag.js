const { PrismaClient } = require('@prisma/client')
const jwt = require('jsonwebtoken')
const tokenVerification = require('../../Validators/tokenVerification')

const postTag = async (req,res)=>{
    try{
        // Check if the user is authorized
        if(req.headers.authorization === undefined){
            return res.status(400).send({
                error: "Not Authorized"
            })
        }
        // Check if the token is valid
        const decodedToken = tokenVerification(req.headers.authorization)
        if(!decodedToken){
            return res.status(400).send({
                error: "Invalid Token"
            })
        }
        // Check if the user has reached the maximum number of tags
        const user = await prisma.user.findFirst({
            where: {
                id: decodedToken.id
            },
            include: {
                tags: true
            }
        })
        if(!user){
            return res.status(404).send({
                error: "User Not Found"
            })
        }
        // if(user.role !== "admin"){
        //     return res.status(403).send({
        //         error: "You are not authorized to create tags"
        //     })
        // }
        if(user.tags.length >= 5){
            return res.status(403).send({
                error: "You have reached the maximum number of tags"
            })
        }
        // Post the tag
        const tag = req.body
        if(!tag){
            return res.status(400).send({
                error: "Tag Required"
            })
        }
        const prisma = new PrismaClient()
        const newTag = await prisma.tag.create({
            data: {
                name: req.body.name
            }
        })
        res.status(200).send({
            message: "Tag Created",
            tag: newTag
        })
    }catch(err){
        console.log(err)
        res.status(500).send({
            error: "Error Creating Tag",
            message: err.message
        })
    }
}

module.exports = postTag