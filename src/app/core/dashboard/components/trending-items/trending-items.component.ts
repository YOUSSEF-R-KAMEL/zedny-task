import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-trending-items',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './trending-items.component.html',
  styleUrl: './trending-items.component.scss'
})
export class TrendingItemsComponent {

  trendingItems = [
    {title: "Course Name", bg: 'rgba(252, 24, 90, 1)', prog: '65'},
    {title: "Book Name", bg: 'rgba(13, 110, 253, 1)', prog: '44'},
    {title: "Reading Name", bg: 'rgba(2, 194, 122, 1)', prog: '27'},
    {title: "Book Name", bg: 'rgba(111, 66, 193, 1)', prog: '66'},
    {title: "Course Name", bg: 'rgba(253, 126, 20, 1)', prog: '29'},
    {title: "Course Name", bg: 'rgba(13, 202, 240, 1)', prog: '85'},
    {title: "Course Name", bg: 'rgba(214, 51, 132, 1)', prog: '44'},
  ]
  mostViewedSkills = [
    {content: 'Verbal Communication Skills', col: 6},
    {content: 'Verbal and non Communication Skills', col: 6},
    {content: 'Active Listening', col: 4},
    {content: 'Small Skill', col: 4},
    {content: 'Moderate Skills', col: 4},
    {content: 'Verbal Communication Skills', col: 6},
    {content: 'Verbal and non Communication Skills', col: 6},
    {content: 'Active Listening', col: 4},
    {content: 'Small Skill', col: 4},
    {content: 'Moderate Skills', col: 4},
  ]
}
