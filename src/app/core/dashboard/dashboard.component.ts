import { Component } from '@angular/core';
import { NavComponent } from "./components/nav/nav.component";
import { HeaderComponent } from "./components/header/header.component";
import { CourseEnrollmentComponent } from "./components/course-enrollment/course-enrollment.component";
import { WatchingOverviewComponent } from "./components/watching-overview/watching-overview.component";
import { CompletionUpdatesComponent } from "./components/completion-updates/completion-updates.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TrendingItemsComponent } from "./components/trending-items/trending-items.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavComponent, HeaderComponent, CourseEnrollmentComponent, WatchingOverviewComponent, CompletionUpdatesComponent, FooterComponent, TrendingItemsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
