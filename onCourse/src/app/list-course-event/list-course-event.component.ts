import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-course-event',
  templateUrl: './list-course-event.component.html',
  styleUrls: ['./list-course-event.component.css']
})
export class ListCourseEventComponent implements OnInit {

  data: DataService;

  constructor(data: DataService) {
    this.data = data;
  }

  ngOnInit() {
    //todo change thgis
    if (this.data.currentNewCourse != null) {
      this.data.getCourseEvents(this.data.currentNewCourse.course_id);
    }
  }

  





}
