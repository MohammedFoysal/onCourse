import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { DataService } from './data.service'
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component'
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ViewCourseComponent } from './view-course/view-course.component';
import { AddCourseEventComponent } from './add-course-event/add-course-event.component';
import { ListCourseEventComponent } from './list-course-event/list-course-event.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    FooterComponent,
    ViewCourseComponent,
    AddCourseEventComponent,
    ListCourseEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
