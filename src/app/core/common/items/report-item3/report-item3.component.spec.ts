import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportItem3Component } from './report-item3.component';

describe('ReportItem3Component', () => {
  let component: ReportItem3Component;
  let fixture: ComponentFixture<ReportItem3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportItem3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportItem3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
