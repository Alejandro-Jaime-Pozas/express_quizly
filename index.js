const dotenv = require('dotenv');
// console.log(process.env) 
const express = require('express');
const port = 3000;
const path = require('path');
const { connectDB } = require('./src/db')
// console.log(__dirname)

dotenv.config() // this imports and configures dotenv
const app = express();
connectDB();



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


app.listen(process.env.PORT, () => {
    console.log(`server is now running on port ${process.env.PORT}`)
});

// console.log(module)