import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportItem1Component } from './report-item1.component';

describe('ReportItem1Component', () => {
  let component: ReportItem1Component;
  let fixture: ComponentFixture<ReportItem1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportItem1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportItem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
