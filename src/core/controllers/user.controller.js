
class UserController {

    constructor({
        userService
    }) {
        this.userService = userService
    }


  
    async index({req , res}){
         res.render('pages/home')
    }


     async login(req , res){
        res.render('pages/auth/login')
    }


     async register(req , res){
        res.render('pages/auth/register')
    }


       async overview(req, res) {
        return res.render('pages/dashboard/overview')
    }
}

module.exports = UserController