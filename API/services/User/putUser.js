const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const joi = require('joi');
const bcrypt = require('bcrypt');
const { putUserSchema } = require('../../Validators/userValidator');

const putUser = async (req, res) => {
    try {
        const prisma = new PrismaClient();
        const id = req.params.id;
        
        // Validate the user input
        const validatedUser = await putUserSchema.validateAsync(req.body);
        
        // Update the user
        const user = await prisma.user.update({
            where: {
                id: req.params.id
            },
            data: {
                ...validatedUser
            }
        });

        if (!user) {
            res.status(404).send({
                message: "User Not Found"
            });
        }
        
        res.status(201).json({ message: "User Updated", user });
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
                message: "Error Updating User",
                error: err.message
            });
        }
    }
};

module.exports = putUser;
