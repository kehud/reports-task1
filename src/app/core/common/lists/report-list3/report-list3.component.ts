import { Component, OnInit } from '@angular/core';
import { ReportModel } from 'src/app/core/models/report-model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-report-list3',
  templateUrl: './report-list3.component.html',
  styleUrls: ['./report-list3.component.scss']
})
export class ReportList3Component implements OnInit {

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
