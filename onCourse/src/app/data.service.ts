import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from './list-courses/Course';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  courses: Course[] = [];


  constructor(private http: HttpClient) { 
    this.getCourses();
  }


  public addCourse(course: Course): void {
    this.http.post<Course[]>('/api/course', course).subscribe(courses => {
        this.courses = courses;
    })
  }

  getCourses() : void {
    this.http.get<Course[]>('/api/course').subscribe(courses => {
      this.courses = courses;
    });
  }

}
