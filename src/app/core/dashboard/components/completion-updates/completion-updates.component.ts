import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { HeadingChartComponent } from '../../../../shared/heading-chart/heading-chart.component';

@Component({
  selector: 'app-completion-updates',
  standalone: true,
  imports: [CommonModule,
            ChartModule,
            HeadingChartComponent,
          ],
  templateUrl: './completion-updates.component.html',
  styleUrl: './completion-updates.component.scss'
})
export class CompletionUpdatesComponent {
  data: any;
  options: any;
  items = [
    {count: 15, title: 'COURSES', icon: 'COURSES'},
    {count: 22, title: 'BOOKS', icon: 'BOOKS'},
    {count: 10, title: 'READINGS', icon: 'READINGS'},
    {count: 41, title: 'QUIZZES', icon: 'QUIZZES'},
    {count: 11, title: 'CERTIFICATES', icon: 'CERTIFICATES'},
    {count: 2, title: 'PATHWAYS', icon: 'PATHWAYS'},
  ]

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    this.data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      datasets: [
        {
          label: 'Yearly',
          data: [100, 84, 35, 91, 78, 104, 90, 65, 86, 67],
          backgroundColor: '#FFD200',
          fill: false,
          borderRadius: 8,
          borderSkipped: false,
          categoryPercentage: 0.5,
        },
        {
          label: 'Yearly',
          data: [70, 110, 95, 45, 60, 120, 85, 100, 55, 90],
          backgroundColor: '#00C6FB',
          fill: false,
          borderRadius: 8,
          borderSkipped: false,
          categoryPercentage: 0.5,
        },
        {
          label: 'Yearly',
          data: [40, 65, 75, 30, 100, 80, 50, 95, 60, 110],
          backgroundColor: '#7928CA',
          fill: false,
          borderRadius: 8,
          borderSkipped: false,
          categoryPercentage: 0.5,
        },
      ]
    };

    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            drawBorder: true,
            color: 'rgba(224, 224, 224, 1)',
            borderColor: 'rgba(224, 224, 224, 1)',
            borderSkipped: true,
            borderWidth: 99999,
            drawOnChartArea: false,
            drawTicks: true,
          },
          ticks: {
            padding: 20,
            font: { size: 14 }
          },
        },
        y: {
          beginAtZero: true,
          display: true,
          min: 0,
          max: 120,
          ticks: {
            stepSize: 30,
            color: textColor,
            font: { size: 14 },
          },
          grid: {
            drawOnChartArea: false,
            drawBorder: true,
            color: '#000',
          }
        }
      }
    }
  }
}

