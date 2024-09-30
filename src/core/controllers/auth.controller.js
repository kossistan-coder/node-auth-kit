
const {route ,before , GET ,POST } = require('awilix-router-core')
class AuthController {
    @route('/')
    @GET()
    static async index(req , res){
         res.render('pages/home')
    }


    @route('/login')
    @GET()
    static async login(req , res){
        res.render('pages/auth/login')
    }

    @route('/register')
    @GET()
    static async register(req , res){
        res.render('pages/auth/register')
    }
}

module.exports = AuthController