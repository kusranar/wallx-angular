import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HistoryTransComponent } from './history-trans/history-trans.component';

const accRoutes : Routes = [ 
  {path : "home", component: HomeComponent},
  {path : "history", component: HistoryTransComponent}
]; 
 
@NgModule({ 
  declarations: [],
  imports: [ 
    CommonModule,
    RouterModule.forChild(accRoutes)
  ] 
}) 
export class AccountRootingModule { }
