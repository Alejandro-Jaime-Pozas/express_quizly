const MainAuthRouter = require('express').Router(); // creating a Router object


MainAuthRouter.route('/register')
    .get(require('./register.view'))
    .post(require('./register'))


MainAuthRouter.route('/login')
    .get(require('./login.view'))


module.exports = MainAuthRouter // this module.exports allows us 