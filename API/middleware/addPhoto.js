const { PrismaClient } = require('@prisma/client')
const multer = require('multer')

const addPhoto = async (req, res, next) => {
    try {
        const photos = req.files
        if (photos) {
            req.body.photos = photos
            res.status(200).send({
                message: "Photo Added",
                photos
            })
        }
        // if (!photos) {
        //     return res.status(400).send({
        //         error: "No Photos added"
        //     })
        // }
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