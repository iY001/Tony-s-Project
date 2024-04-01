const express = require('express')
const router = express.Router()

const deleteTag = require('../services/Tags/deleteTag')
const postTag = require('../services/Tags/postTag')
const getTagById = require('../services/Tags/getTagById')
const getAllTags = require('../services/Tags/getAllTags')
const putTag = require('../services/Tags/putTag')
const adminMWPremission = require('../middleware/adminMWPremission')


router.get('/', getAllTags)  // Done

router.get('/:id', getTagById)  // Done

router.post('/', adminMWPremission, postTag)  // Done

router.put('/:id', adminMWPremission, putTag)  // Not Tested 

router.delete('/:id', adminMWPremission , deleteTag)  // Done

module.exports = router