const express = require('express')
const router = express.Router()


const getAllUsers = require('../services/User/getAllUsers')
const postUser = require('../services/User/postUser')
const putUser = require('../services/User/putUser')
const deleteUserById = require('../services/User/deleteUserById')
const getUserById = require('../services/User/getUserById')
const putRole = require('../services/User/putRole')
const adminMWPremission = require('../middleware/adminMWPremission')
const makeAdmin = require('../services/User/makeAdmin')
const forgotPassword = require('../services/User/auth/forgetPassword')
const signup = require('../services/User/auth/signup')
const signin = require('../services/User/auth/signin')
const resetPassword = require('../services/User/auth/resetPassword')



router.post('/auth/signup', (req, res) => {
    signup(req, res)
})

router.post('/auth/signin', (req, res) => {
    signin(req, res)
})

router.get('/', (req, res) => {
    getAllUsers(req, res)
})

router.get('/auth/forgetpassword', (req, res) => {
    forgotPassword(req, res)
})
router.post('/auth/resetpassword', (req, res) => {
    resetPassword(req, res)
})

router.get('/:id', (req, res) => {
    getUserById(req, res)
})

// Admin Operations

router.post('/makeadmin/:id', (req, res) => {
    makeAdmin(req, res)
}) // Only for test
router.put('/editrole/:id', adminMWPremission, (req, res) => {
    putRole(req, res)
})
router.post('/', adminMWPremission, (req, res) => {
    postUser(req, res)
})
router.put('/:id', adminMWPremission, (req, res) => {
    putUser(req, res)
})
router.delete('/:id', adminMWPremission, (req, res) => {
    deleteUserById(req, res)
})

module.exports = router