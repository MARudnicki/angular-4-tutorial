import {Component} from '@angular/core';
import {CoursesService} from "./courses.service";

@Component({
  selector:'courses',
  template: `
    <h2>{{title}}</h2>
    <ul>
      <li *ngFor="let c of courses">
        {{c}}
      </li>
    </ul>
    `
})
export class CoursesComponent {

  title = 'some title';
  courses;


  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
