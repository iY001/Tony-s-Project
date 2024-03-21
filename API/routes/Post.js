const express = require('express')
const router = express.Router()

const getAllPosts = require('../services/Post/getAllPosts')
const getPostById = require('../services/Post/getPostById')
const createPost = require('../services/Post/createPost')
const deletePost = require('../services/Post/deletePost')
const addPhoto = require('../middleware/addPhoto')
const multer = require('multer')
const storage = multer.memoryStorage()
// Initialize Multer instance with the storage configuration
const upload = multer({ storage: storage });

router.get('/', (req, res) => {
    getAllPosts(req, res)
})

router.get('/:id', (req, res) => {
    getPostById(req, res)
})

router.post('/', upload.array('files'), addPhoto, createPost)

router.put('/:id', (req, res) => {
    editPost(req, res)
})

router.delete('/:id', (req, res) => {
    deletePost(req, res)
})
module.exports = router



