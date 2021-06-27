import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportList1Component } from './report-list1.component';

describe('ReportList1Component', () => {
  let component: ReportList1Component;
  let fixture: ComponentFixture<ReportList1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportList1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
