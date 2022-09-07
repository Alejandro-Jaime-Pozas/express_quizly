const MainAuthRouter = require('express').Router(); // creating a Router object


MainAuthRouter.route('/register')
    .get((req, res) => {
    res.send('Main Auth Router here')
})
    .post((req, res) => {
    res.send('Main Auth Router here')
})


module.exports = MainAuthRouter // this module.exports allows us 