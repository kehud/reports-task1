import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { ReportItem1Component } from './core/common/items/report-item1/report-item1.component';
import { ReportItem2Component } from './core/common/items/report-item2/report-item2.component';
import { ReportList1Component } from './core/common/lists/report-list1/report-list1.component';
import { ReportList2Component } from './core/common/lists/report-list2/report-list2.component';

import { SharedServiceService } from './core/sharedService/shared-service.service';
import { ReportList3Component } from './core/common/lists/report-list3/report-list3.component';
import { ReportList4Component } from './core/common/lists/report-list4/report-list4.component';
import { ReportItem3Component } from './core/common/items/report-item3/report-item3.component';
import { ReportItem4Component } from './core/common/items/report-item4/report-item4.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ReportItem1Component,
    ReportItem2Component,
    ReportList1Component,
    ReportList2Component,
    ReportList3Component,
    ReportList4Component,
    ReportItem3Component,
    ReportItem4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SharedServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
