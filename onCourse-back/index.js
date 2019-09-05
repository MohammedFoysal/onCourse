const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const db = require('./db.js');

app.listen(8002, function () {
  console.log('express started on port 8002');
});


