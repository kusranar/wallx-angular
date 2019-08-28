import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeForexComponent } from './home-forex/home-forex.component';

const forexRoutes : Routes = [
  { path : "home", component: HomeForexComponent}
]

@NgModule({ 
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(forexRoutes)
  ]
})
export class ForexRootingModule { }
