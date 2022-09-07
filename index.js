const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('hello world')
});


// initialize routes folder
const initRoutes = require('./src/routes'); // if you hover over the /src/routes, you see its location and it refers to the index.js there
initRoutes(app);


app.listen(port, () => {
    console.log(`server is now running on port ${port}`)
});

console.log(module)