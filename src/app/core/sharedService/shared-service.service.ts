import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService{
  myGlobalVar: number;

  constructor(){
    this.myGlobalVar = 0;
    alert("My intial global variable value is: " + this.myGlobalVar);
  }

  setMyGV(val: number){
    this.myGlobalVar = val;
  }

  getMyGV(){
    return this.myGlobalVar;
  }
}
