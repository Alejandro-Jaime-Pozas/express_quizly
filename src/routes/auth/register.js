module.exports = (req, res) => {
    if (req.body.password !== req.body.confirmPass){
        res.send({error: "Your passwords do not match"}) // when you send an object through you don't need to make each object a string
        return
    }
    res.send('post register from register')
}