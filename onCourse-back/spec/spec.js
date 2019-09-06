const request = require('supertest');
const assert = require("assert");
let server = require('../index')();

const JasmineConsoleReporter = require('jasmine-console-reporter');

const reporter = new JasmineConsoleReporter({
  colors: 1,           // (0|false)|(1|true)|2
  cleanStack: 1,       // (0|false)|(1|true)|2|3
  verbosity: 4,        // (0|false)|1|2|(3|true)|4|Object
  listStyle: 'indent', // "flat"|"indent"
  timeUnit: 'ms',      // "ms"|"ns"|"s"
  timeThreshold: { ok: 500, warn: 1000, ouch: 3000 }, // Object|Number
  activity: false,     // boolean or string ("dots"|"star"|"flip"|"bouncingBar"|...)
  emoji: true,
  beep: true
});

jasmine.getEnv().addReporter(reporter);


describe('loading express', () => {
  it('responds to /course get', function testCourse(done) {
    request(server)
    .get('/course')
    .expect(200, done);
  });

  it('responds to /course post', function testCourse(done) {
    request(server)
    .post('/course')
    .expect(500, done); // Not sent any data so should have a server error
  });

  it('404 everything else', function testPath(done) {
    request(server)
    .get('/foo/bar')
    .expect(404, done);
  });
});

describe('posting to course', () => {
  let course;
  beforeEach(function () {
    // Set up valid course
    course = {
      course_title: 'fred course',
      location: 'Belfast',
      duration_hours: 23,
      start_date: '2019-09-23',
      description: 'fojhasdknjlfadsjldfsajklbafekljbafes',
      trainer_names: 'fred',
      target_audience: 'not fred'
    };
  });

  it('is valid', function validCourse(done) {
    request(server)
    .post('/course')
    .send(course)
    .expect(200, done)
    .expect(function (response) {
      assert(response.body.successful, true)
    });
  });

  it('invalid name', function invalidCourseName(done) {
    course.course_title = 'lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll'; //189 chars
    request(server)
    .post('/course')
    .send(course)
    .expect(500, done)
    .expect(function (response) {
      assert(response.body.message.errors[0].msg,
          'Course title must not exceed a 100 characters')
    })
  });

  it('invalid location', function invalidCourseLocation(done) {
    course.location = 'l'; //not valid
    request(server)
    .post('/course')
    .send(course)
    .expect(500, done)
    .expect(function (response) {
      assert(response.body.message.errors[0].msg, 'Location must be valid')
    })
  });

  it('invalid start_date', function invalidCourseStartDate(done) {
    course.start_date = '2018-12-12'; //In the past
    request(server)
    .post('/course')
    .send(course)
    .expect(500, done)
    .expect(function (response) {
      assert(response.body.message.errors[0].msg,
          'Start date must not be in the past')
    })
  });

  it('invalid duration_hours', function invalidCourseDurationHours(done) {
    course.duration_hours = -1; //They give us time
    request(server)
    .post('/course')
    .send(course)
    .expect(500, done)
    .expect(function (response) {
      assert(response.body.message.errors[0].msg,
          'Duration must be a number greater than 0')
    })
  });

  it('invalid description', function invalidCourseDescription(done) {
    course.description = 'llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll'; //more than 300 chars
    request(server)
    .post('/course')
    .send(course)
    .expect(500, done)
    .expect(function (response) {
      assert(response.body.message.errors[0].msg,
          'Description must not exceed a 300 characters')
    })
  });

  it('invalid trainer_names', function invalidCourseTrainerNames(done) {
    course.trainer_names = 'fred, fred, fred, fred, fred, fred, fred, fred, fred, fred, fred, fred, fred, fred, fred, fred, fred, fred'; //too many freds
    request(server)
    .post('/course')
    .send(course)
    .expect(500, done)
    .expect(function (response) {
      assert(response.body.message.errors[0].msg,
          'Total number of characters for trainer names must not exceed 100')
    })
  });

  it('invalid target_audience', function invalidCourseTargetAudience(done) {
    course.target_audience = 'lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllstill needs to more that 200 characters'; //200+ chars
    request(server)
    .post('/course')
    .send(course)
    .expect(500, done)
    .expect(function (response) {
      assert(response.body.message.errors[0].msg,
          'Target audience must not exceed a 200 characters')
    })
  });
});
