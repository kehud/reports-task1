import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/core/sharedService/shared-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  _reportNumber: number = 0;//this.sharedServiceService.getMyGV();
  constructor() { }

  ngOnInit(): void {

    //alert("GV: " + this.sharedServiceService.getMyGV());
  }



  // changeGV(val){
  //   this.sharedServiceService.setMyGV(val);
  // }

  // showGV(){
  // }



  selectedReport(reportNumber: number){
    debugger;
    this._reportNumber = reportNumber;
    //this.sharedServiceService.setMyGV(this._reportNumber);
  }
}
