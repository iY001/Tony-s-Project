const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const tokenVerification = require('../Validators/tokenVerification');

const adminMWPremission = async (req, res, next) => {
    try {
        const prisma = new PrismaClient();
        const token = req.headers.authorization;
        const decodedToken = tokenVerification(token)
        if (!token) {
            res.status(401).send('Unauthorized');
            return;
        }
        const user = await prisma.user.findFirst({
            where: {
                id: decodedToken.id
            }
        })
        if (user.role === 'admin') {
            req.decodedToken = decodedToken
            next();
        } else {
            res.status(403).send('No Permission');
        }
    } catch (err) {
        console.log(err)
        res.status(500).send('Internal Server Error...');
    }
};

module.exports = adminMWPremission