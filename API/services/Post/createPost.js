const { PrismaClient } = require('@prisma/client')
const jwt = require('jsonwebtoken')
const tokenVerification = require('../../Validators/tokenVerification')
const { postSchema } = require('../../Validators/userValidator')

const createPost = async (req, res, nxt) => {
    try {
        const post = req.body
        const photos = req.body.photos
        if (!photos) {
            return res.status(400).send({
                error: "No photos found"
            })
        }
        const validPost = postSchema.validateAsync(post)
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
        const prisma = new PrismaClient()
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
        const newPost = await prisma.post.create({
            data: {
                ...validPost,
                userId: user.id,
                image: {
                    createMany: {
                        data: photos
                    }
                }
            }
        })

        res.status(200).send({
            message: "Post Created",
            post: newPost
        })
    } catch (err) {
        if (err.isJoi) {
            // Extract and send Joi validation errors
            const validationErrors = err.details.map(error => ({
                field: error.context.key,
                error: error.message,
            }));

            res.status(400).json({ validationErrors });
        } else {
            console.error(err);
            res.status(500).send({
                error: "Error Creating Post",
                message: err.message
            });
        }
    }
}

module.exports = createPost