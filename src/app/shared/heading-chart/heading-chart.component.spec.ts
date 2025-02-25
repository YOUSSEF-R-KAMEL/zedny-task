import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingChartComponent } from './heading-chart.component';

describe('HeadingChartComponent', () => {
  let component: HeadingChartComponent;
  let fixture: ComponentFixture<HeadingChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadingChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
