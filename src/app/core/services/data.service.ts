import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ReportModel } from '../models/report-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }
   
  //headers
   private headers: object = {
    "Accept": "*/*",
    "Content-Type": "application/json"
  };

  //get report from api
  GetReportByID(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(`${environment.api}/GetReportByID/` + id,
      {
        headers: {
          ...this.headers
        }
      })
      .toPromise()
      .then((data: any) => {
        return resolve(data);
      })
      .catch(error => {
        return reject(error);
      });
    });
  }


  //get local fake data
  reports = [
    {id: 1, name: "Reports 001", description: "Reports 001 des", email: "c001@email.com"},
    {id: 2, name: "Reports 002", description: "Reports 002 des", email: "c002@email.com"},
    {id: 3, name: "Reports 003", description: "Reports 003 des", email: "c003@email.com"},
    {id: 4, name: "Reports 004", description: "Reports 004 des", email: "c004@email.com"}
  ];

  public GetReportByID2():Array<ReportModel>{
    return this.reports;
  }

}