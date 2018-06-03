import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { DeptorDetailsComponent } from './deptor-details/deptor-details.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';
import { ScModalModule } from 'angular-5-popup';
import {DeptorsComponent} from './deptors/deptors.component';

@NgModule({
  declarations: [
    AppComponent,
    DeptorDetailsComponent,
    DashboardComponent,
    DeptorsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    GridModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    RouterModule,
    HttpClientModule,
    ScModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
