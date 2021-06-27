import { Component, Input, OnInit } from '@angular/core';
import { ReportModel } from 'src/app/core/models/report-model';

@Component({
  selector: '[app-report-item1]',
  templateUrl: './report-item1.component.html',
  styleUrls: ['./report-item1.component.scss']
})
export class ReportItem1Component implements OnInit {

  constructor() { }

  //input
  @Input() reportItem: ReportModel;

  ngOnInit(): void {
  }

}
