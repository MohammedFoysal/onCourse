const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const db = require('./db.js');

function handleError(err, req, res) {
  if (err.errno === 3819) err.code = "ER_CHECK_CONSTRAINT_VIOLATED";
  console.error(`${err.errno} (${err.code}) : ${err.sqlMessage}`);
  res.status(500).send({
    message: 'Database error. ' + err.sqlMessage
  });
}

app.listen(8002, function () {
  console.log('express started on port 8002');
});

app.post('/course', function (req, res) {

});
