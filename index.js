const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
console.log(__dirname)


app.get('/', (req, res) => {
    res.send('hello world')
});

// set the view engine to ejs
app.set('view engine', 'ejs')
// update the location of the views folder that res.render uses
app.set('views', path.join(__dirname, 'src/templates/views'))

// need this setting so that form data is added to request
app.use(express.urlencoded({ extended: true }))

// initialize routes folder
const initRoutes = require('./src/routes'); // if you hover over the /src/routes, you see its location and it refers to the index.js there
initRoutes(app);


app.listen(port, () => {
    console.log(`server is now running on port ${port}`)
});

// console.log(module)