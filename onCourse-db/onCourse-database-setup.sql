DROP DATABASE IF EXISTS onCourse_db;
CREATE DATABASE IF NOT EXISTS onCourse_db;
USE onCourse_db;

CREATE TABLE IF NOT EXISTS Course(
	course_id smallint PRIMARY KEY auto_increment,
    course_title VARCHAR(100) NOT NULL,
    location ENUM("Belfast", "Derry", "Dublin", "London", "Gdansk", "Amsterdam", "Boston", "Frankfurt") NOT NULL,
    description VARCHAR(300) NOT NULL,
    start_date DATE NOT NULL,
    duration_hours DECIMAL(4,2) NOT NULL,
    trainer_names VARCHAR(100) NOT NULL,
    target_audience VARCHAR(200) NOT NULL
);