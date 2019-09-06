import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Course } from '../list-courses/Course';
import { format } from 'util';
import { ListCoursesComponent } from '../list-courses/list-courses.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  dataService: DataService;
  course: Course;

  dateCheck: boolean;

  form = new FormGroup({
    course_title: new FormControl('', [Validators.required,Validators.maxLength(100)]),
    date: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.maxLength(300)]),
    trainer_names: new FormControl('', [Validators.required,Validators.maxLength(100)]),
    target_audience: new FormControl('', [Validators.required,Validators.maxLength(200)]),
    duration_hours: new FormControl('', Validators.required)

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
    console.log(new Date().toJSON().slice(0,10).replace(/-/g,'/'))
    //console.log(this.course.date)
    if (courseForm.valid) {
        this.dataService.addCourse(this.course);
        console.log('added');
    } else {
      console.log("Can't add")
    }
  }



  compareDates(date:any){
    console.log("I got date")

    let todayDate = new Date()

    console.log(todayDate);
    console.log(typeof(date));


    let dateSplit = date.split('-');
    var mydate = new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2]); 

    if (mydate<todayDate){
      this.dateCheck = false;
      console.log(this.dateCheck );
    }
    else {
      this.dateCheck = true;
      console.log(this.dateCheck );
    }
  }


}
