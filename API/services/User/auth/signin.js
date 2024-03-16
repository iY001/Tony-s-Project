const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const joi = require('joi');
const bcrypt = require('bcrypt');
const { signinSchema } = require('../../../Validators/userValidator');

const signin = async (req, res) => {
    try {
        const prisma = new PrismaClient();

        // Validate the user input
        const validatedUser = await signinSchema.validateAsync(req.body);

        // Find the user by email
        const user = await prisma.user.findFirst({
            where: {
                email: validatedUser.email,
            },
        });
        if (!user) {
            return res.status(401).send('Not found user');
        }

        // Check if the user exists and verify the password
        if (user.email && !(await bcrypt.compare(validatedUser.password, user.password))) {
            return res.status(401).send('Invalid email or password');
        }

        // Generate JWT token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.setHeader('Authorization', token);
        res.status(200).json({ message: "User Signed In", user });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error signing in');
    }
};

module.exports = signin;
