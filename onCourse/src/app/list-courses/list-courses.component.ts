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
  tempString: String;
  
  checkDescLength()
  {
    console.log("This is running");
    
    if(this.data.course.description != null  )
    {
      console.log("---------------------------");
      console.log(this.data.course.description);
      this.data.course.description = this.data.course.description.slice(0, 20);
      // this.data.course.description += "...";
    }

    return true;
  }

  constructor(dataService: DataService) { this.data = dataService}
  ngOnInit() {

  }

  
  
}
