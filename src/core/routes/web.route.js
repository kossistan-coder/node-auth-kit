const express = require('express')
const { scopePerRequest, makeInvoker, route } = require('awilix-express');

const router = express.Router()
const UserController = require('../controllers/user.controller')



const container = require('../container')
router.use(scopePerRequest(container))

const userController = makeInvoker(UserController);

router.get('/login', userController('login'))
router.get('/',userController('index'))



module.exports = router