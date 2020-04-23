var express = require('express');
var app = express();

app.get('*', function (req, res) {
    res.send('Hello World!');
});

app.get('/test', function (req, res) {
    res.send('this is another path');
});

var port = process.env.PORT || 8000

app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});