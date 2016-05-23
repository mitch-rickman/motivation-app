var express = require('express');
var app = express();

express.get('/', (req, res) => {
    res.send('hello world');
});
