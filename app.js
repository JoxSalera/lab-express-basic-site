const express = require('express');

const app = express();

// Static files
app.use(express.static('public'))

// Home-Page Route
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));

// About Route
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));

// Greatest-Hits Route
app.get('/hits', (request, response, next) => response.sendFile(__dirname + '/views/hits.html'));

// Server Started
app.listen(3000, () => console.log('Nirvana fan page listening on port 3000! '))