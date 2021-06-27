import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  ReportNumber: number;
  @Output() selectedReport = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(reportNumber: number) {
    if (reportNumber) return;
    this.selectedReport.emit(reportNumber)
    this.ReportNumber = 0;
  }
}
