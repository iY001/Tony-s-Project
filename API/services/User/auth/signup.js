const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const { signupSchema } = require('../../../Validators/userValidator');
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
    try {
        const prisma = new PrismaClient();
        if (!req.body) {
            return res.status(400).send("Fill all fields");
        }
        // Validate the user input
        const validatedUser = await signupSchema.validateAsync(req.body, { abortEarly: false });
        // Check if the user already exists
        const userExists = await prisma.user.findFirst({
            where: {
                email: validatedUser.email
            }
        });
        if (userExists) {
            return res.status(400).send({
                message: "User already exists"
            });
        }
        // Hash the password
        hashedPassword = await bcrypt.hash(validatedUser.password, 10);
        const user = await prisma.user.create({
            data: {
                name: validatedUser.name,
                email: validatedUser.email,
                password: hashedPassword,
                role: validatedUser.role
            }
        });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.setHeader('Authorization', token);
        res.status(201).send({ message: "User Created", user });
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
            res.status(500).send("Error Creating User");
        }
    }
}

module.exports = signup;
