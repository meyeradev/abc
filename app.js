// Modules
var express = require('express'),
    app = express(),
    path = require('path'),
    port = 1318,
    appDir = path.dirname(require.main.filename);

// Middleware
app.use('/', express.static(appDir+'/public/'));

// Routes
app
.get('/', function(req, res) {
    res.sendFile(appDir+'/public/index.html');
})
.use(function(req, res) {
    res.redirect('/');
});

// Server
app.listen(port, function() {
    console.log('listening on *'+port);
})
