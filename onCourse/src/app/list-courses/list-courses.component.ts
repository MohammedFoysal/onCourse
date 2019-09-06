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
  //listCourses: any[];

  constructor(dataService: DataService) { this.data = dataService}
  ngOnInit() {

  }
  
}
