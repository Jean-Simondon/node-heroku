const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', function (req, res) {
    res.send('Hello world');
});


app.get('/other_road', function (req, res) {
    res.send('Hello world');
});

app.listen(PORT, function() {
    console.log('Example app listening on port ' + PORT);
});