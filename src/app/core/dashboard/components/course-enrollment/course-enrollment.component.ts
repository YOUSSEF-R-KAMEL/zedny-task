import { Component } from '@angular/core';
import { ICourseEnrollment } from './models/ICourseEnrollment';

@Component({
  selector: 'app-course-enrollment',
  standalone: true,
  imports: [],
  templateUrl: './course-enrollment.component.html',
  styleUrl: './course-enrollment.component.scss'
})
export class CourseEnrollmentComponent {

  courses:ICourseEnrollment[] = [
    {
      title: "Course Enrollment",
      description: "3 of them were enrolled recently",
      coursesComplete: "8 course left to complete",
      progress: "68%"
    },
    {
      title: "Course Enrollment",
      description: "3 of them were enrolled recently",
      coursesComplete: "8 course left to complete",
      progress: "68%"
    },
    {
      title: "Course Enrollment",
      description: "3 of them were enrolled recently",
      coursesComplete: "8 course left to complete",
      progress: "68%"
    }
  ]
}
