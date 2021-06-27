import { Component, OnInit } from '@angular/core';
import { ReportModel } from 'src/app/core/models/report-model';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-report-list2',
  templateUrl: './report-list2.component.html',
  styleUrls: ['./report-list2.component.scss']
})
export class ReportList2Component implements OnInit {

  reportRecords: ReportModel;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.load();
  }


  async load(){
    let _reportRecords: any;
    _reportRecords = await this.dataService.GetReportByID2();
    this.reportRecords = _reportRecords;
  }

}
