import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletionUpdatesComponent } from './completion-updates.component';

describe('CompletionUpdatesComponent', () => {
  let component: CompletionUpdatesComponent;
  let fixture: ComponentFixture<CompletionUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletionUpdatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompletionUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
