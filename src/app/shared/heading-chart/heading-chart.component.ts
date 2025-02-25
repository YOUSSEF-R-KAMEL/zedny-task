import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-heading-chart',
  standalone: true,
  imports: [ButtonModule,
            CalendarModule,
            FormsModule,
            CommonModule
          ],
  templateUrl: './heading-chart.component.html',
  styleUrl: './heading-chart.component.scss'
})
export class HeadingChartComponent {
  date: Date | undefined;
  @ViewChild('cal', { read: ElementRef }) calendarElement!: ElementRef;
  @Input() title = '';
  openCalendar(): void {
    const inputEl: HTMLInputElement | null = this.calendarElement.nativeElement.querySelector('input');
    if (inputEl) {
      inputEl.click();
    }
  }
}
