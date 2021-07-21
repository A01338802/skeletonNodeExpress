var express = require('express');
var app = express();

app.get('/', (req, res) => {
    var data = {title: 'Home', user: 'David'}
    res.render('pages/home', data);
});

module.exports = app;