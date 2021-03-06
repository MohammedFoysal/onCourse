import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Course } from '../list-courses/Course';
import { CourseEvent } from '../CourseEvent';
import { format } from 'util';
import { ListCoursesComponent } from '../list-courses/list-courses.component';
import { AddCourseEventComponent } from '../add-course-event/add-course-event.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  dataService: DataService;
  course: Course;
  formIsValid:boolean = false;
  dateCheck: boolean;

  form = new FormGroup({
    course_title: new FormControl('', [Validators.required,Validators.maxLength(100)]),
    // date: new FormControl('', Validators.required),
    // location: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.maxLength(300)]),
    // trainer_names: new FormControl('', [Validators.required,Validators.maxLength(100)]),
    target_audience: new FormControl('', [Validators.required,Validators.maxLength(200)])
    // duration_hours: new FormControl('', Validators.required)

    // email: new FormControl('', [
    //   Validators.required,
    //   Validators.email
    // ]),
    // password: new FormControl('', [
    //   Validators.required,
    //   Validators.minLength(6)
    // ])
    
   });

  constructor(dataService: DataService) { 
    this.dataService = dataService;

   }

  ngOnInit() {
    this.dateCheck = true;
    this.course = new Course();
  }

  addCourse(courseForm) {
    console.log(courseForm);
    if (courseForm.valid) {
        this.formIsValid = true;
        const courseToAdd: Course = this.course;
        this.dataService.addCourse(courseToAdd);
        alert("The course has been added");
        
        // location.reload();
    } else {
      console.log("Can't add")
      alert("The course could not be added");
    }
  }

  compareDates(date:any){
    let todayDate = new Date()

    let dateSplit = date.split('-');
    var mydate = new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2]); 

    if (mydate < todayDate){
      this.dateCheck = false;
    }
    else {
      this.dateCheck = true;
    }
  }



}
