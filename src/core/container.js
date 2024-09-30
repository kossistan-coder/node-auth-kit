const { asClass, asValue, createContainer } = require('awilix')
const UserController = require('./controllers/user.controller')
const UserService = require('./services/user.service')
 
const container = createContainer()

container.register({
    userService: asClass(UserService).singleton(),
    

    userController: asClass(UserController).singleton(),
    
    
})

module.exports = container