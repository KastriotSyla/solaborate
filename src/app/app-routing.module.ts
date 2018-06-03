import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeptorsComponent } from './deptors/deptors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeptorDetailsComponent} from './deptor-details/deptor-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'deptors', component: DeptorsComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'deptor/:id', component: DeptorDetailsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
