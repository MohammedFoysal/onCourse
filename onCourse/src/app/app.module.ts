import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCourseComponent,
    HeaderComponent,
    ListCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
