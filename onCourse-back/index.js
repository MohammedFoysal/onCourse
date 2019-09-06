module.exports = function makeServer() {

  const express = require('express');
  const app = express();
  const bodyParser = require('body-parser');
  const {check, validationResult, body} = require('express-validator');
  const moment = require('moment');

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded());

  const db = require('./db.js');

  function handleError(err, req, res) {
    if (err.errno === 3819) {
      err.code = "ER_CHECK_CONSTRAINT_VIOLATED";
    }
    //  console.error(`${err.errno} (${err.code}) : ${err.sqlMessage}`);
    res.status(500).send({
      message: err
    });
  };

  const server = app.listen(8002, function () {
    console.log('express started on port 8002');
  });

  app.post('/course', [
    check('course_title', 'Course title must be present')
    .exists()
    .custom((value, {req}) => {
      return value.length > 0
    }),
    check('course_title', 'Course title must not exceed a 100 characters')
    .custom((value, {req}) => {
      return value.length <= 100
    }),
    check('location', 'Location must be valid')
    .custom((value, {req}) => {
      const locations = ['Belfast', 'Derry', 'Dublin', 'London', 'Gdansk',
        'Amsterdam', 'Boston', 'Frankfurt'];

      return locations.includes(value.trim());
    }),
    check('start_date', 'Start date must not be in the past')
    .custom((value, {req}) => {
      const date = moment(value).format('YYYY-MM-DD');
      const now = moment().subtract(1, "days").format("YYYY-MM-DD");

      return moment(date).isAfter(now);
    }),
    check('duration_hours', 'Duration must be a number greater than 0')
    .custom((value, {req}) => {
      return value > 0;
    }),
    check('description', 'Description must be present')
    .exists()
    .custom((value, {req}) => {
      return value.length > 0
    }),
    check('description', 'Description must not exceed a 300 characters')
    .custom((value, {req}) => {
      return value.length <= 300
    }),
    check('target_audience', 'Target audience must be present')
    .exists()
    .custom((value, {req}) => {
      return value.length > 0
    }),
    check('target_audience', 'Target audience must not exceed a 200 characters')
    .custom((value, {req}) => {
      return value.length <= 200
    }),
    check('trainer_names', 'Trainer names must be present')
    .exists()
    .custom((value, {req}) => {
      return value.length > 0
    }),
    check('trainer_names', 'Total number of characters for trainer names must not exceed 100')
    .custom((value, {req}) => {
      return value.length <= 100
    })
  ], (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return handleError(errors, req, res);
    }

    app.get('/courses', (req, res) => {
      db.getCourses((err, rows) => {
        if (err) return handleError(err);
        res.send(rows);
      })
    });

    app.get('/course/:id', (req, res) => {
      db.getCourse(req.params.id, (err, rows) => {
        if (err) return handleError(err);
        res.send(rows[0]);
      })
    });

  return server;
}