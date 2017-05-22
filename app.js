// Modules
var express = require('express'),
    app = express(),
    path = require('path'),
    port = 1318;

// Middleware
app.use('/', express.static(path.resolve('public/')));

// Routes
app
.get('/', function(req, res) {
    res.sendFile(path.resolve('public/index.html'));
})
.use(function(req, res) {
    res.redirect('/');
});

// Server
app.listen(port, function() {
    console.log('listening on *'+port);
})