const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/game/:pokemon', (req, res) => {
    axios({
        url: `https://pokeapi.co/api/v2/pokemon/ditto`,
        method: 'get',
    })
    .then(response => {
        res.status(200).send(response.data);
    })
});


module.exports = app;