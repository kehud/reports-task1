import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportItem2Component } from './report-item2.component';

describe('ReportItem2Component', () => {
  let component: ReportItem2Component;
  let fixture: ComponentFixture<ReportItem2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportItem2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportItem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
