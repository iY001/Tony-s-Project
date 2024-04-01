const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const tokenVerification = require('../../Validators/tokenVerification');
const { postUpdatesSchema } = require('../../Validators/postValidator');



const putPost = async (req, res, nxt) => {
    try {
        const postId = req.params.id; // Assuming post ID is passed in the request params
        const postUpdates = req.body; // Updates to the post
        if (!postUpdates) {
            return res.status(400).send({
                error: "Invalid Post"
            });
        }
        const photos = req.body.photos;
        const decodedToken = req.decodedToken;
        if (!postId) {
            return res.status(400).send({
                error: "Post ID not provided"
            });
        }

        const validPostUpdates = await postUpdatesSchema.validateAsync(postUpdates);
        if (!validPostUpdates) {
            return res.status(400).send({
                error: "Invalid Post"
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
                user_id: user.id
            }
        });

        if (!existingPost) {
            return res.status(404).send({
                error: "Post Not Found"
            });
        }
        if (existingPost.user_id !== user.id) {
            return res.status(403).send({
                error: "This post does not belong to you"
            });
        }
        // Update the post
        const updatedPost = await prisma.post.update({
            where: {
                id: postId
            },
            data: {
                title: postUpdates.title || existingPost.title,
                content: postUpdates.content || existingPost.content,
                image: {
                    create: photos ? photos : existingPost.photos
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

module.exports = putPost;
