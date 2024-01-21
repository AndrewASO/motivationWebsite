import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeWidgetComponent } from './time-widget.component';

describe('TimeWidgetComponent', () => {
  let component: TimeWidgetComponent;
  let fixture: ComponentFixture<TimeWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeWidgetComponent]
    });
    fixture = TestBed.createComponent(TimeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
