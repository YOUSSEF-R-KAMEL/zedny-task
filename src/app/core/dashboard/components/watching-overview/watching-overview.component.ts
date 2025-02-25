import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { HeadingChartComponent } from '../../../../shared/heading-chart/heading-chart.component';

@Component({
  selector: 'app-watching-overview',
  standalone: true,
  imports: [CommonModule,
            ChartModule,
            HeadingChartComponent,
          ],
  templateUrl: './watching-overview.component.html',
  styleUrl: './watching-overview.component.scss'
})
export class WatchingOverviewComponent {
  data: any;
  options: any;
  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    this.data = {
      labels: ['','','','','','','',''],
      datasets: [
        {
          label: 'Yearly',
          data: [28, 48, 40, 19, 86, 27, 90, 70],
          fill: true,
          borderColor: documentStyle.getPropertyValue('--red-500'),
          tension: 0.4,
          backgroundColor: 'rgba(255, 99, 74, 0.3)',
          pointRadius: 0,
        },
        {
          label: 'Yearly',
          data: [12, 51, 62, 33, 21, 62, 45, 40],
          fill: true,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.4,
          backgroundColor: 'rgba(9, 27, 73, 0.5)',
          pointRadius: 0,
        },
        {
          label: 'Yearly',
          data: [65, 59, 80, 81, 56, 55, 40, 55],
          fill: true,
          borderColor: documentStyle.getPropertyValue('--yellow-500'),
          tension: 0.4,
          backgroundColor: 'rgba(255, 210, 0, 0.3)',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
        },
      ]
    };

    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
          labels: {
            font: {
              size: 14,
              family: 'Arial'
            },
            color: textColor
          }
        },
        legendBackground: {
          backgroundColor: 'rgba(255, 210, 0, 0.3)'
        }
      },
      scales: {
        x: {
          ticks: {
            padding: 20,
            color: '#666',
            font: { size: 12 }
          },
        },
        y: {
          beginAtZero: true,
          display: true,
          min: 0,
          max: 100,
          ticks: {
            stepSize: 20,
            color: textColor,
            padding: 20,
            font: { size: 12 },
          },
          grid: {
            offset: true,
            color: textColor
          }
        }
      }
    }
  }
}
