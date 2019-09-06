import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseEventComponent } from './add-course-event.component';

describe('AddCourseEventComponent', () => {
  let component: AddCourseEventComponent;
  let fixture: ComponentFixture<AddCourseEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCourseEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
