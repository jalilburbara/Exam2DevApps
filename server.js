var express = require('express');
var path = require('path');
var app = express();

app.listen(3000, function () {
    console.log('App escuchando en el puerto 3000!');
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'public','index.html'));
});

app.get('/js/services/CarrosServices.js', function (req, res) {
    res.sendFile(path.join(__dirname,'public', 'js', 'services', 'CarrosServices.js'));
});

app.get('/apiCarros', function (req, res) {
    var carros = [
        {
            "marca": "Toyota",
            "modelo": "Corolla"
        },
        {
            "marca": "Nissan",
            "modelo": "Almera"
        },
        {
            "marca": "Ford",
            "modelo": "Mustang"
        },
        {
            "marca": "Chevrolet",
            "modelo": "Camaro"
        },
        {
            "marca": "Chevrolet",
            "modelo": "Tracker"
        },
        {
            "marca": "Nissan",
            "modelo": "Frontier"
        }];
    res.status(200).json(carros);
});

