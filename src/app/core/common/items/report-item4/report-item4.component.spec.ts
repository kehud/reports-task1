import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportItem4Component } from './report-item4.component';

describe('ReportItem4Component', () => {
  let component: ReportItem4Component;
  let fixture: ComponentFixture<ReportItem4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportItem4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportItem4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
