var express = require('express');

var app = express();




app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + 'public/index.html');
});

var server = app.listen(process.env.PORT || 80, console.log('Server started on port 80'));
