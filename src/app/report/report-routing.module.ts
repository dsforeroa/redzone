import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ReportComponent } from './component/report/report.component';

const routes: Routes = [
  {
    path: '',
    component: ReportComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ReportRoutingModule { }
