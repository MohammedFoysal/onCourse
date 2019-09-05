const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { check, validationResult, body } = require('express-validator');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const db = require('./db.js');

function handleError(err, req, res) {
  if (err.errno === 3819) err.code = "ER_CHECK_CONSTRAINT_VIOLATED";
//  console.error(`${err.errno} (${err.code}) : ${err.sqlMessage}`);
  res.status(500).send({
    message: err
  });
}

app.listen(8002, function () {
  console.log('express started on port 8002');
});

app.post('/course', [
  check('course_title', 'Course title must be present')
    .exists()
    .custom((value, { req }) => {
                    return value.length > 0
    }),
  check('course_title', 'Course title must not exceed a 100 characters')
    .custom((value, { req }) => {
        return value.length <= 100
    })
], (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return handleError(errors, req, res);
    }

    res.send('testy');
});
