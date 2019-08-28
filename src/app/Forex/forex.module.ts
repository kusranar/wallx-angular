import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeForexComponent } from './home-forex/home-forex.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForexRootingModule } from './forex-rooting.module';
import { RouterModule } from '@angular/router';
 
@NgModule({
  declarations: [
    HomeForexComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ForexRootingModule,
    RouterModule, 
    ReactiveFormsModule
  ]
}) 
export class ForexModule { }
