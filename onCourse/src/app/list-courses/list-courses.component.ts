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

  // checkDescLength()
  // {
  //   console.log(this.data.course.description);
  //   console.log("This is running");
    
  //   if(this.data.course.description.length > 20)
  //   {
  //     this.data.course.description.slice(0, 20);
  //     this.data.course.description + "...";
  //   }
  // }

  constructor(dataService: DataService) { this.data = dataService}
  ngOnInit() {

  }
  
}
