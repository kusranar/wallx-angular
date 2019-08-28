import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history/history.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransRootModule } from './trans-root.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HistoryComponent
  ], 
  imports: [
    CommonModule,
    FormsModule,
    TransRootModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class TransModule { }
