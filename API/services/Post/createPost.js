const { PrismaClient } = require('@prisma/client');
const tokenVerification = require('../../Validators/tokenVerification');
const { postSchema } = require('../../Validators/postValidator');

const createPost = async (req, res, next) => {
    try {
        const prisma = new PrismaClient();
        const post = req.body;
        const photos = req.body.photos;

        // Validate the post data
        const validPost = await postSchema.validateAsync(post);
        if (!validPost) {
            return res.status(400).send({
                error: "Invalid Post"
            });
        }

        // Access decoded token from the request object
        const decodedToken = req.decodedToken;

        // Find the user based on the decoded token
        const user = await prisma.user.findFirst({
            where: {
                id: decodedToken.id
            }
        });

        if (!user) {
            return res.status(404).send({
                error: "User Not Found"
            });
        }

        // Create the post and connect it with the user
        const newPost = await prisma.post.create({
            data: {
                title: post.title,
                content: post.content,
                user: {
                    connect: {
                        id: user.id
                    }
                },
                image: {
                    create: photos ? photos : []
                }
            }
        });

        res.status(200).send({
            message: "Post Created",
            post: newPost
        });
    } catch (err) {
        if (err.isJoi) {
            // Extract and send Joi validation errors
            const validationErrors = err.details.map(error => ({
                field: error.context.key,
                error: error.message,
            }));

            res.status(400).json({ validationErrors });
        } else {
            console.error("server error", err);
            res.status(500).send({
                error: "Error Creating Post",
                message: err.message
            });
        }
    }
}

module.exports = createPost;
