import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from './list-courses/Course';
import { CourseEvent } from './CourseEvent';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  courses: Course[];
  course: Course = new Course();

  courseEvents: CourseEvent[];
  currentNewCourse: Course;

  constructor(private http: HttpClient) { 
    this.getCourses();
  }


  public addCourse(course: Course): void {
    this.http.post<Course>('/api/course', course).subscribe(res => {
      if(res[0] == null){
        console.error(res);
      } else {
        console.log("Successfully added")
      }
    })
  }

  getCourses() : void {
    this.http.get<Course[]>('/api/courses').subscribe(res => {
      if(res[0] == null){
        console.error(res);
      } else {
        this.courses = res;
      }
    });
  }

  getCourse(id) : void {
    this.http.get<Course>('/api/course/' + id).subscribe(course => {
      this.course = course;
    });
  }

  getCourseEvents(course_id) : void {
    this.http.get<CourseEvent[]>('/api/course-events/' + course_id).subscribe(res => {
      if(res[0] == null){
        console.error(res);
      } else {
        this.courseEvents = res;
      }
    });

    // this.courseEvents = [
    //   {course_event_id: 3, course_id: 2, location: 'London', start_date: '2019-04-03', duration_hours: 3, trainer_names: 'someone'}
    // ]
  }

}
