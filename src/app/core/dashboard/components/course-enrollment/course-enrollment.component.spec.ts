import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEnrollmentComponent } from './course-enrollment.component';

describe('CourseEnrollmentComponent', () => {
  let component: CourseEnrollmentComponent;
  let fixture: ComponentFixture<CourseEnrollmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseEnrollmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
