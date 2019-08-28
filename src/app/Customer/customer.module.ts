import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomerRootingModule } from './customer-rooting.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CurrencyService } from '../services/currency/currency.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ 
    DashboardComponent
  ], 
  imports: [
    CommonModule,
    FormsModule,
    CustomerRootingModule,
    RouterModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [CurrencyService]
})
export class CustomerModule { }
