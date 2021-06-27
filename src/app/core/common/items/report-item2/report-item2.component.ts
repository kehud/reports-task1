import { Component, Input, OnInit } from '@angular/core';
import { ReportModel } from 'src/app/core/models/report-model';

@Component({
  selector: '[app-report-item2]',
  templateUrl: './report-item2.component.html',
  styleUrls: ['./report-item2.component.scss']
})
export class ReportItem2Component implements OnInit {

  constructor() { }

  //input
  @Input() reportItem2: ReportModel;

  ngOnInit(): void {
  }

}
