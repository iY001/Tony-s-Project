const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');

const makeAdmin = async (req, res) => {
    try {
        const prisma = new PrismaClient();
        const id = req.params.id;
        const user = await prisma.user.findFirst({
            where: {
                id: id
            }
        });

        if (!user) {
            return res.status(404).send("User Not Found");
        }

        if (user.role === 'admin') {
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
            res.setHeader('Authorization', token);
            return res.status(400).send("User Already Admin");
        }

        console.log("user", user);

        await prisma.user.update({
            where: {
                id: id
            },
            data: {
                role: 'admin'
            }
        });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        // Set token in response header
        res.setHeader('Authorization', token);

        // Send response
        res.status(200).json({ message: "User Made Admin", user });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error Making User Admin: " + err.message);
    }
};

module.exports = makeAdmin;
