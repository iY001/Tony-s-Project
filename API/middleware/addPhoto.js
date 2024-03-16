const { PrismaClient } = require('@prisma/client')
const multer = require('multer')

const addPhoto = async (req, res, next) => {
    try {
        const photos = req.files
        if (!photos) {
            return res.status(400).send({
                error: "No photos found"
            })
        }
        req.body.photos = photos
        next()
    } catch (err) {
        console.log(err)
        res.status(500).send({
            error: "Error Adding Photo",
            message: err.message
        })
    }
}

module.exports = addPhoto