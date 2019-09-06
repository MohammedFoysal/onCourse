import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-course-event',
  templateUrl: './add-course-event.component.html',
  styleUrls: ['./add-course-event.component.css']
})
export class AddCourseEventComponent implements OnInit {

  data: DataService;

  constructor(data: DataService) { 
    this.data = data;

   }

  ngOnInit() {
  }

}
