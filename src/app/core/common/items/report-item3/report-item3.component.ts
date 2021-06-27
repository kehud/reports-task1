import { Component, Input, OnInit } from '@angular/core';
import { ReportModel } from 'src/app/core/models/report-model';

@Component({
  selector: '[app-report-item3]',
  templateUrl: './report-item3.component.html',
  styleUrls: ['./report-item3.component.scss']
})
export class ReportItem3Component implements OnInit {

  constructor() { }

   //input
   @Input() reportItem3: ReportModel;

  ngOnInit(): void {
  }

}
