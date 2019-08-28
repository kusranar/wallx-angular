import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeTraderComponent } from './home-trader/home-trader.component';

const traderRoutes : Routes = [
  { path : "home", component : HomeTraderComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(traderRoutes)
  ]
})
export class TraderRootingModule { }
 