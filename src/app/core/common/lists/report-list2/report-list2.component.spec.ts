import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportList2Component } from './report-list2.component';

describe('ReportList2Component', () => {
  let component: ReportList2Component;
  let fixture: ComponentFixture<ReportList2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportList2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
