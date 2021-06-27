import { Component, Input, OnInit } from '@angular/core';
import { ReportModel } from 'src/app/core/models/report-model';

@Component({
  selector: '[app-report-item4]',
  templateUrl: './report-item4.component.html',
  styleUrls: ['./report-item4.component.scss']
})
export class ReportItem4Component implements OnInit {

  
  constructor() { }
  
  //input
  @Input() reportItem4: ReportModel;

  ngOnInit(): void {
  }

}
