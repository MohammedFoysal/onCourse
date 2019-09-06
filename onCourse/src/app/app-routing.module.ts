import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { ListCoursesComponent } from './list-courses/list-courses.component';
import { ViewCourseComponent } from './view-course/view-course.component';


const routes: Routes = [
  { path: 'add', component: AddCourseComponent},
  { path: 'view', component: ListCoursesComponent},
  { path: 'course/:id', component: ViewCourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AddCourseComponent, ListCoursesComponent]