const express = require('express')
const router = express.Router()

const getAllPosts = require('../services/Post/getAllPosts')
const getPostById = require('../services/Post/getPostById')
const createPost = require('../services/Post/createPost')
const deletePost = require('../services/Post/deletePost')
const addPhoto = require('../middleware/addPhoto')
const multer = require('multer')
const checkAuthorized = require('../middleware/checkAuthorized')
const putPost = require('../services/Post/putPost')
const connectTag = require('../services/Post/connectTag')
const storage = multer.memoryStorage()
// Initialize Multer instance with the storage configuration
const upload = multer({ storage: storage });

router.get('/', getAllPosts) // Done

router.get('/:id', getPostById) // Done
 
router.post('/', upload.array('files'), addPhoto, checkAuthorized , createPost) // Done

router.post('/:post_id/connect-tag/:tag_id', checkAuthorized, connectTag) // Done

router.put('/:id', upload.array('files'), addPhoto, checkAuthorized , putPost)  // Done

router.delete('/:id',  checkAuthorized, deletePost) // Done
module.exports = router



