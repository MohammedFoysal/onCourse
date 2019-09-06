import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  data: DataService;
  route: ActivatedRoute;
  id = "0";

  constructor(dataService: DataService, route: ActivatedRoute) { 
    this.data = dataService
    this.route = route;
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")
    this.data.getCourse(this.id);
  }

}
