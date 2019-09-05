import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {


  title: string;

  listCourses: any[];

  constructor() { }
  ngOnInit() {
    this.title = "List of courses";


    this.listCourses = [
      {courseName:"Computer Science",
       trainer:"John Doe",
       description:"A great course",
       targetAudience: "Students",
       duration:"4 years",
    },

        {courseName:"Cyber Security",
        trainer:"Marinela",
        description:"Do not take this course",
        targetAudience: "Teenagers",
        duration:"2 years",
    },

      {courseName:"Networking",
      trainer:"Beyonce",
      description:"Course is okay",
      targetAudience: "Students",
      duration:"20 years",
      }
    ]
  }
  
}
