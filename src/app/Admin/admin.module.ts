import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRootingModule } from './admin-rooting.module';
import { RouterModule } from '@angular/router';
import { UpdateCurrencyComponent } from './update-currency/update-currency.component';
import { AddWalletTypeComponent } from './add-wallet-type/add-wallet-type.component';
import { TransferAccountComponent } from './transfer-account/transfer-account.component';

@NgModule({
  declarations: [
    HomeAdminComponent,
    UpdateCurrencyComponent,
    AddWalletTypeComponent,
    TransferAccountComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRootingModule,
    RouterModule,
    ReactiveFormsModule 
  ]
})
export class AdminModule { }
