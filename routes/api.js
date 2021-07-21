var express = require('express');
var app = express();

app.get('/characters', (req, res) => {
    res.send('Api charactes');
});

module.exports = app;