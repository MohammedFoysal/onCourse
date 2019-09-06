require('dotenv').config({path: 'mysql.env'});
const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE
});

db.connect(function (err) {
  if (err) {
    throw err;
  }
  console.log("Connected to MySQL");
});

//Add new course to the database
exports.addCourse = function (data, readyFn) {
  db.query('INSERT INTO Course SET ?', data,
      function (error, results, fields) {
        if (error) {
          return readyFn(null, error);
        }
        readyFn(null, results.insertId);
      });
};

exports.addCourseEvent = function (data, readyFn) {
  db.query('INSERT INTO Course_Events SET ?', data,
      function (error, results, fields) {
        if (error) {
          return readyFn(null, error);
        }
        readyFn(null, results.insertId);
      });
};


//Get all courses from the database
exports.getCourses = function (callback) {
  db.query('SELECT * FROM Course',
      function (err, rows) {
        if (err) {
          return callback(err, null);
        }
        callback(null, rows);
      });
};

//Get course from the database
exports.getCourse = function (courseId, callback) {
  db.query(
      'SELECT course_id, course_title, location, description, DATE_FORMAT(start_date, "%d-%m-%Y") AS start_date, duration_hours, target_audience, trainer_names FROM Course LEFT JOIN Course_Events USING(course_id) WHERE course_id = ?',
      [courseId],
      function (err, rows) {
        if (err) {
          return callback(err, null);
        }
        callback(null, rows);
      });
};
