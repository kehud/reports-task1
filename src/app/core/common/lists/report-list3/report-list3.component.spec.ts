import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportList3Component } from './report-list3.component';

describe('ReportList3Component', () => {
  let component: ReportList3Component;
  let fixture: ComponentFixture<ReportList3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportList3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportList3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
