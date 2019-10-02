const express = require('express');
const app = express();
beerRouter = require('./routes/beerRouter');
const mongoose = require('mongoose');

app.use('/beers', beerRouter) 

app.use('/', (req, res) => {
    console.log(`Something hit me!`);
    res.send(`<h1> Welcome to the beer API </h1>`);
})

const port = process.env.PORT || 4444;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})

