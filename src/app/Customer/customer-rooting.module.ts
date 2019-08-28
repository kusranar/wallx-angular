import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from '../register/register.component';

const custRoutes: Routes = [
  {path :"dash", component: DashboardComponent}
];

@NgModule({
  declarations: [],  
  imports: [ 
    CommonModule, 
    RouterModule.forChild(custRoutes)
  ]
})
export class CustomerRootingModule { }
