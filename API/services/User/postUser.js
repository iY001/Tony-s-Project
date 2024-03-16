const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const joi = require('joi');
const bcrypt = require('bcrypt');
const { postUserSchema } = require('../../Validators/userValidator');


const postUser = async (req, res) => {
    try {
        const prisma = new PrismaClient();

        // Validate the user input
        const validatedUser = await postUserSchema.validateAsync(req.body);

        const user = await prisma.user.findFirst({
            where: {
                email: validatedUser.email
            }
        })
        if (user) {
            res.status(400).send({
                message: "User already exists"
            })
        }
        const newUser = await prisma.user.create({
            data: {
                ...validatedUser
            }
        });

        res.status(200).json({
            message: "User Created",
            user
        });
    } catch (err) {
        if (err.isJoi) {
            // Extract and send Joi validation errors
            const validationErrors = err.details.map(error => ({
                field: error.context.key,
                message: error.message,
            }));

            res.status(400).json({ validationErrors });
        } else {
            console.error(err);
            res.status(500).send({
                message: "Error Creating User",
                error: err.message
            });
        }
    }
};

module.exports = postUser