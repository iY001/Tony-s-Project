const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const tokenVerification = require('../../Validators/tokenVerification');
const { postSchema } = require('../../Validators/userValidator');

const updatePost = async (req, res, nxt) => {
    try {
        const postId = req.params.id; // Assuming post ID is passed in the request params
        const postUpdates = req.body; // Updates to the post
        const photos = req.body.photos;

        if (!postId) {
            return res.status(400).send({
                error: "Post ID not provided"
            });
        }

        if (!photos) {
            return res.status(400).send({
                error: "No photos found"
            });
        }

        const validPostUpdates = await postSchema.validateAsync(postUpdates);

        const token = req.headers.authorization;
        if (!token) {
            return res.status(400).send({
                error: "Not Authorized"
            });
        }

        const decodedToken = tokenVerification(token);
        if (!decodedToken) {
            return res.status(400).send({
                error: "Invalid Token"
            });
        }

        const prisma = new PrismaClient();
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

        // Check if the post exists and belongs to the user
        const existingPost = await prisma.post.findFirst({
            where: {
                id: postId,
                userId: user.id
            }
        });

        if (!existingPost) {
            return res.status(404).send({
                error: "Post Not Found or does not belong to the user"
            });
        }

        // Update the post
        const updatedPost = await prisma.post.update({
            where: {
                id: postId
            },
            data: {
                ...validPostUpdates,
                image: {
                    createMany: {
                        data: photos
                    }
                }
            }
        });

        res.status(200).send({
            message: "Post Updated",
            post: updatedPost
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
            console.error(err);
            res.status(500).send({
                error: "Error Updating Post",
                message: err.message
            });
        }
    }
}

module.exports = updatePost;
