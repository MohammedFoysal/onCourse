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

CREATE TABLE IF NOT EXISTS Trainer(
	trainer_id smallint PRIMARY KEY auto_increment,
	f_name VARCHAR(80),
    l_name VARCHAR(100)
);

CREATE TABLE Course_Trainer(
	trainer_id smallint,
    course_id smallint,
    PRIMARY KEY(trainer_id, course_id),
    FOREIGN KEY(trainer_id) REFERENCES Trainer(trainer_id),
    FOREIGN KEY(course_id) REFERENCES Course(course_id)
);