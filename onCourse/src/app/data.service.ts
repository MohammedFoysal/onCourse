import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from './list-courses/Course';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  courses: Course[];
  course: Course = new Course();

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
    this.http.get<Course[]>('/api/course').subscribe(res => {
      console.log(res)
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

}
