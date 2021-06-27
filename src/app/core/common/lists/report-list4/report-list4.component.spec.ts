import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportList4Component } from './report-list4.component';

describe('ReportList4Component', () => {
  let component: ReportList4Component;
  let fixture: ComponentFixture<ReportList4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportList4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportList4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
