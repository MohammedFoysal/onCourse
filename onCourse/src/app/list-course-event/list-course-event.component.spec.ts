import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCourseEventComponent } from './list-course-event.component';

describe('ListCourseEventComponent', () => {
  let component: ListCourseEventComponent;
  let fixture: ComponentFixture<ListCourseEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCourseEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCourseEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
