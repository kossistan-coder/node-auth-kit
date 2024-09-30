const express = require('express')
const AuthController = require('../controllers/auth.controller')
const AdminController = require('../controllers/admin.controller')
const router = express.Router()

router.get('/login', (req, res) => AuthController.login(req, res))
router.get('/register', (req, res) => AuthController.register(req, res))


router.get('/overview',(req,res)=>AdminController.index(req,res))

module.exports = router