import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent implements OnInit {


  title: string;
  data: DataService;
  listCourses: any[];

  constructor(dataService: DataService) { this.data = dataService}
  ngOnInit() {


    // this.listCourses = [
    //   {courseName:"Computer Science",
    //    trainer:"John Doe",
    //    description:"A great course",
    //    targetAudience: "Students",
    //    duration:"4 years",
    // },

    //     {courseName:"Cyber Security",
    //     trainer:"Marinela",
    //     description:"Do not take this course",
    //     targetAudience: "Teenagers",
    //     duration:"2 years",
    // },

    //   {courseName:"Networking",
    //   trainer:"Beyonce",
    //   description:"Course is okay",
    //   targetAudience: "Students",
    //   duration:"20 years",
    //   }
    // ]
  }
  
}
