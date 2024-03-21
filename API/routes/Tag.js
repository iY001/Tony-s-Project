const express = require('express')
const router = express.Router()

const deleteTag = require('../services/Tags/deleteTag')
const postTag = require('../services/Tags/postTag')
const getTagById = require('../services/Tags/getTagById')
const getAllTags = require('../services/Tags/getAllTags')


router.get('/', (req, res) => {
    getAllTags(req, res)
})

router.get('/:id', (req, res) => {
    getTagById(req, res)
})

router.post('/', (req, res) => {
    postTag(req, res)
})

router.put('/:id', (req, res) => {
    putTag(req, res)
})

router.delete('/:id', (req, res) => {
    deleteTag(req, res)
})

module.exports = router