const express = require('express');
const app = express();

app.get('/get-token', function(req, res) {
    res.send('hello world');
  });