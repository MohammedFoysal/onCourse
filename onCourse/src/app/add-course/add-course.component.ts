import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Course } from '../list-courses/Course';
import { format } from 'util';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  dataService: DataService;
  course: Course;

  constructor(dataService: DataService) { 
    this.dataService = dataService;

   }

  ngOnInit() {
    this.course = new Course();
  }

  addCourse(courseForm) {
    console.log(courseForm);
    if (courseForm.valid) {
        this.dataService.addCourse(this.course);
        console.log('added');
    } else {
      console.log("Can't add")
    }
  }



}
